// add this to make front and back run concurrently
// "scripts": {
//  "start": "concurrently \"react-scripts start\" \"nodemon server/index.js --watch server\""
// }

require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./controllers/authCtrl");

/*
// node mailer
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const {
  sendWelcomeEmail,
  sendConfirmation,
  sendIncomeStatementInfo,
  sendRetirementPlanInfo
} = require("./nodeMailerTests/NodeMailer");
*/

const { SESSION_SECRET, CONNECTION_STRING, PORT } = process.env;
const port = PORT || 3001;

// const { getProfile } = require("./controllers/profileCtrl");
const {
  // getIncomeStatement,
  updateIncomeStatement
} = require("./controllers/incomestatementCtrl");
const {
  getUserDeposits,
  addEmergencyDeposit,
  addRetirementDeposit,
  deleteDeposit
} = require("./controllers/nestEggCtrl");
// const { functionname } = require('./controllers/retirementPlanCtrl')
const {
  getAllCards,
  getCard,
  addCard,
  updateCard,
  deleteCard
} = require("./controllers/purchaseCardsCtrl");

const app = express();
app.use(json());
app.use(cors());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 9 // 9 weeks
    }
  })
);

// npm run build when done. uncomment after
//app.use(express.static(`${__dirname}/../build`));

//app.use(express.static(`${__dirname}/public/build`));

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance
    //   .postgres_create()
    //   .then(resonse => {
    //     console.log("Table Created");
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(err => {
    console.log(err);
  });
authCtrl(app);
// test endpoint
// app.get("/api/test", (req, res) => {
//   res.status(200).json("Test Route Works!!!");
// });

// profile controls. login, logout
// app.get("api/userprofile", getProfile);

// get logged in user information - auth controls
const authenticated = (req, res, next) => {
  console.log("sp note", req.user, req.session, req.user);
  if (req.user) {
    next();
  } else {
    res.sendStatus(403);
  }
};

app.get("/api/userprofile", authenticated, (req, res, next) => {
  console.log("user", req.user);
  res.status(200).send(req.user);
});

// income statement controls
// app.get("/api/incomestatement/:id", getIncomeStatement);
app.put("/api/incomestatement/:id", updateIncomeStatement);

// nest egg controls
app.get("/api/userdeposits/:userid", getUserDeposits);
app.post("/api/addemergencydeposit", addEmergencyDeposit);
app.post("/api/addretirementdeposit", addRetirementDeposit);
app.delete("/api/deletedeposit/:userid/:depositid", deleteDeposit);

// retirement plan controls
// chartsJS will update retirement plan page
// app.put("/api/retirementplan", )

// cards for desired purchases page
app.get("/api/cards/:userid", getAllCards);
app.get("/api/card/:id", getCard);
app.post("/api/card/:userid", addCard);
app.put("/api/card/:id", updateCard);
app.delete("/api/card/:userid/:cardid", deleteCard);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

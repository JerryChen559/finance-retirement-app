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

const { SESSION_SECRET: secret, CONNECTION_STRING, PORT } = process.env;
const port = PORT || 4000;

// const { functionname } = require('./controllers/authCtrl')
// const { functionname } = require('./controllers/nestEggCtrl')
// const { functionname } = require('./controllers/purchaseCardsCtrl')
// const { functionname } = require('./controllers/retirementPlanCtrl')

const app = express();
app.use(json());
app.use(cors());

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 9 // nine weeks
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
    //   .create_house_table()
    //   .then(resonse => {
    //     console.log("Table Created");
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(err => {
    console.log(err);
  });

// test endpoint
// app.get("/api/test", (req, res) => {
//   res.status(200).json("Test Route Works!!!");
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

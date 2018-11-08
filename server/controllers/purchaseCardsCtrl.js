// GET all cards
const getAllCards = (req, res) => {
  const db = req.app.get("db");
  db.get_allcards(req.params.userid)
    .then(response => {
      console.log("get all Cards", response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// -------------TODO: GET one ------------------
// GET one card
const getCard = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");

  db.get_card(id)
    // .then(console.log(id))
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// POST (add) a card
const addCard = (req, res) => {
  const db = req.app.get("db");
  db.add_card(req.params.userid)
    .then(response => {
      console.log("added blank card");
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// TODO: PUT ---------------------
// PUT (update) a card by id
const updateCard = (req, res) => {
  const { userid } = req.params;
  const { itemname, price, importance } = req.body;
  console.log(userid, itemname, price, importance);
  const db = req.app.get("db");

  db.update_card([userid, itemname, price, importance])
    .then(response => {
      console.log("newCards:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE a card by cardid.
// Return all emergency deposits.
const deleteCard = (req, res) => {
  const { userid, cardid } = req.params;
  const db = req.app.get("db");
  console.log("params", req.params);

  db.delete_card([userid, cardid])
    .then(response => {
      console.log("removed:", cardid);
      console.log("newCards:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getAllCards,
  getCard,
  addCard,
  updateCard,
  deleteCard
};

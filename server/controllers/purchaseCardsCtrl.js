// GET all cards
const getAllCards = (req, res) => {
  const db = req.app.get("db");

  db.get_allcards()
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

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
  const { itemname, price, importance, note } = req.body;
  const db = req.app.get("db");

  db.add_card([itemname, price, importance, note])
    .then(response => {
      console.log("add:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// PUT (update) a card by id
const updateCard = (req, res) => {
  const { id } = req.params;
  const { itemname, price, importance, note } = req.body;
  console.log(id, itemname, price, importance, note);
  const db = req.app.get("db");

  db.update_card([id, itemname, price, importance, note])
    .then(response => {
      console.log(`"newArr:" ${response}`);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE a card by id
const deleteCard = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");

  db.delete_card(id)
    .then(console.log(id))
    .then(response => {
      // console.log(`"newArr:" ${response}`);
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

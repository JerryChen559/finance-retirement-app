// GET emergency deposits
const getUserEDeposits = (req, res) => {
  // console.log("req.body");
  const db = req.app.get("db");

  db.get_useremergencydeposits(req.params.id)
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log("get e", response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// GET retirement deposits
const getUserRDeposits = (req, res) => {
  // console.log("req.body");
  const db = req.app.get("db");

  db.get_userretirementdeposits(req.params.id)
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log("get r", response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// POST (add) a deposit to emergency fund
const addEmergencyDeposit = (req, res) => {
  const { user_id, depositemergency } = req.body;
  const db = req.app.get("db");

  db.add_emergencydeposit([user_id, depositemergency])
    .then(response => {
      console.log("add emergencydeposit:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// POST (add) a deposit to retirement fund
const addRetirementDeposit = (req, res) => {
  const { user_id, depositretirement } = req.body;
  const db = req.app.get("db");

  db.add_retirementdeposit([user_id, depositretirement])
    .then(response => {
      console.log("add retirementdeposit:", response);
      // response.map((e, i) => {
      //   return e.depositretirement;
      // });
      // console.log("mapped depositretirement:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE an emergency or retirement deposit by id and type of deposit.
// Return all emergency deposits.
const deleteDeposit = (req, res) => {
  const { datecreated } = req.params;
  const db = req.app.get("db");

  db.delete_deposit(datecreated)
    // .then(console.log(datecreated))
    // .then(response => {
    //   console.log(`"newArr:" ${response}`);
    //   res.status(200).send(response);
    // })
    .catch(e => res.status(500).send(e));
};

// DELETE an emergency deposit by id. Return all emergency deposits.

module.exports = {
  getUserEDeposits,
  getUserRDeposits,
  addEmergencyDeposit,
  addRetirementDeposit,
  deleteDeposit
};

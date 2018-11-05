// GET the logged in user's income statement
const getIncomeStatement = (req, res) => {
  const { id } = req.params;
  const dbInstance = req.app.get("db");

  dbInstance
    .get_user(id)
    // .then(console.log(id))
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// PUT (update) the user's incomestatement
const updateIncomeStatement = (req, res) => {
  const { id } = req.params;
  const {
    salary,
    federaltax,
    statetax,
    sideincome,
    rent,
    mortgage,
    car,
    gas,
    water,
    healthcare,
    school,
    food,
    restaurants,
    clothes,
    gym,
    entertainment,
    travel,
    monthlyexpenses,
    monthlyincome,
    monthlynetincome
  } = req.body;
  console.log(
    salary,
    federaltax,
    statetax,
    sideincome,
    rent,
    mortgage,
    car,
    gas,
    water,
    healthcare,
    school,
    food,
    restaurants,
    clothes,
    gym,
    entertainment,
    travel,
    monthlyexpenses,
    monthlyincome,
    monthlynetincome
  );
  const dbInstance = req.app.get("db");

  dbInstance
    .update_incomestatement([
      salary,
      federaltax,
      statetax,
      sideincome,
      rent,
      mortgage,
      car,
      gas,
      water,
      healthcare,
      school,
      food,
      restaurants,
      clothes,
      gym,
      entertainment,
      travel,
      monthlyexpenses,
      monthlyincome,
      monthlynetincome
    ])
    .then(response => {
      console.log(`"newArr:" ${response}`);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getIncomeStatement,
  updateIncomeStatement
};

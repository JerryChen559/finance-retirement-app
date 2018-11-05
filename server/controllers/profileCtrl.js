// const getProfile = (req, res) => {
//   // if (!req.user) {
//   //   res.status(500).send({ message: "Not Logged In" });
//   // } else {
//   //   res.status(200).send(req.user);
//   // }

//   const db = req.app.get("db");
//   // console.log("session", req.session);
//   // req.session.user = req.user

//   db.get_user()
//     .then(response => {
//       console.log(response);
//       res.status(200).json(response);
//     })
//     .catch(err => res.status(500).send(err));
// };

// module.exports = {
//   getProfile
// };

const nodemailer = require("nodemailer");
const sesTransport = require("nodemailer-ses-transport");
const transporter = nodemailer.createTransport(
  sesTransport({
    accessKeyId: `${process.env.ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`
  })
);

module.exports = {
  sendIncomeStatement: (req, res, next) => {
    // console.log("NODEMAILER >>>>", req.body);
    // console.log(typeof(process.env.ADMIN_EMAIL));
    const { first_name, user_email } = req.body.e;
    transporter
      .sendMail({
        from: process.env.ADMIN_EMAIL,
        to: user_email,
        subject: `${first_name}, Your Zoomie Order Received`,
        text: `Congrats on building your income statement. We are so glad to have you build  Below is a copy of your information.`
        // html:
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  sendRetirementPlan: (req, res, next) => {
    console.log(req.body);
    const { first_name, user_email, message } = req.body;

    transporter
      .sendMail({
        From: `${process.env.ADMIN_EMAIL}`,
        To: user_email,
        subject: `Your Zoomie Order Processed`,
        text: message
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

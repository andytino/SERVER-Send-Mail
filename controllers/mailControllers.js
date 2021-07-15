const mailer = require("../utils/mailer");

const sendMail = async (req, res, next) => {
  // ---- get current time ----
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentTime = day + "" + month + "" + year;

  // ---- set expired time ----
  let expiredTime = "1262020";

  try {
    if (currentTime === expiredTime) {
      await mailer.sendMail();
      console.log("Your email has been sent successfully");
      // res.json("Your email has been sent successfully");
    } else {
      console.log("not expire");
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  sendmail: sendMail,
};

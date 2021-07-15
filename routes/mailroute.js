const mailer = require("../controllers/mailControllers");

module.exports = function (app) {
  app.get("/sendmail", mailer.sendmail);
};

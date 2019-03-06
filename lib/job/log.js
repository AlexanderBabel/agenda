const moment = require("moment-timezone");

module.exports = function(message) {
  this.attrs.data = this.attrs.data || {};
  this.attrs.data.output =
    (this.attrs.data.output || "") +
    `\n[${moment().format("DD. MMM YY HH:mm:ss")}] ${message}`;

  const rows = this.attrs.data.output.split("[");
  if (rows.length > 200) {
    rows.splice(0, rows.length - 200);
    this.attrs.data.output = `[${rows.join("[")}`;
  }

  this.save();
};

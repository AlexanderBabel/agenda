const moment = require("moment-timezone");

module.exports = function(message) {
  this.attrs = this.attrs || {};
  this.attrs.output =
    (this.attrs.output || "") +
    `\n[${moment().format("DD. MMM YY HH:mm:ss")}] ${message}`;

  const rows = this.attrs.output.split("[");
  if (rows.length > 200) {
    rows.splice(0, rows.length - 200);
    this.attrs.output = `[${rows.join("[")}`;
  }

  this.save();
};

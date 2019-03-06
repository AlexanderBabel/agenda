"use strict";

const noCallback = require("../no-callback");

/**
 * Sets a timeout. Should only be called internally.
 * @name Job#setTimeout
 * @function
 * @returns {undefined}
 */
module.exports = async function() {
  // eslint-disable-next-line prefer-rest-params
  noCallback(arguments);

  this.timer = setTimeout(
    async () => await this._timeout_jobCallback(new Error("Job timed out.")),
    this._timeout_time
  );

  return this;
};

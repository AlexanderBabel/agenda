"use strict";

const noCallback = require("../no-callback");

/**
 * If a timeout has been set, the timer will be reset.
 * @name Job#resetTimeout
 * @function
 * @returns {undefined}
 */
module.exports = async function() {
  // eslint-disable-next-line prefer-rest-params
  noCallback(arguments);

  if (this.timer) {
    clearTimeout(this.timer);
    await this._setTimeout();
  }
  return this;
};

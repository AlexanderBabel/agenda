'use strict';

const noCallback = require('../no-callback');

/**
 * Updates "lockedAt" time so the job does not get picked up again
 * If a timeout has been set, the timer will be reset.
 * @name Job#touch
 * @function
 * @returns {undefined}
 */
module.exports = async function() {
  // eslint-disable-next-line prefer-rest-params
  noCallback(arguments);
  this.attrs.lockedAt = new Date();
  await this.resetTimeout();
  return this.save();
};

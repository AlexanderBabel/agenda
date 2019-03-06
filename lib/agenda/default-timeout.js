'use strict';
const debug = require('debug')('agenda:defaultConcurrency');

/**
 * Set the default timeout for each job
 * @name Agenda#defaultTimeout
 * @function
 * @param {Number} num default timeout
 * @returns {exports} agenda instance
 */
module.exports = function(num) {
  debug('Agenda.defaultTimeout(%d)', num);
  this._defaultTimeout = num;
  return this;
};

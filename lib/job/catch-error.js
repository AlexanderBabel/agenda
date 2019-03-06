module.exports = function(err) {
  if (err instanceof Error) {
    this.catchedErrors = this.catchedErrors || [];
    this.catchedErrors.push(err);
  }
  this.fail(err);
};

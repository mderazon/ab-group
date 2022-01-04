const crypto = require('crypto');

// using md5 to add entropy
module.exports = function abGroup(id, groups = 2) {
  if (id === undefined || id === null) {
    throw new Error('Input id is null or undefined');
  }
  return (
    crypto
      .createHash('md5')
      .update(id)
      .digest('hex')
      .split('')
      .map((x) => x.charCodeAt(0))
      .reduce((a, b) => a + b) % groups
  );
};

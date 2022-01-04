const assert = require('assert');
const crypto = require('crypto');

const abGroup = require('../lib');

function randomString() {
  return crypto.randomBytes(20).toString('hex');
}

describe('AB Group', function () {
  it('Should throw an exception when string input is undefined', () => {
    assert.throws(() => {
      abGroup();
    });
  });

  it('Should throw an exception when string input is null', () => {
    assert.throws(() => {
      abGroup(null);
    });
  });

  it('Should be deterministic', () => {
    const randomStrings = Array(100)
      .fill()
      .map((item) => randomString());
    const sum1 = randomStrings
      .map((item) => abGroup(item))
      .reduce((a, b) => a + b);
    const sum2 = randomStrings
      .map((item) => abGroup(item))
      .reduce((a, b) => a + b);
    assert.equal(sum1, sum2);
  });

  it('Should be random', () => {
    // we want 99.999% level of confidence
    // https://en.wikipedia.org/wiki/Checking_whether_a_coin_is_fair
    const result = Array(10000)
      .fill()
      .map(() => randomString())
      .map((item) => abGroup(item))
      .reduce((a, b) => a + b);

    assert.ok(result > 4766 && result < 5170);
  });
});

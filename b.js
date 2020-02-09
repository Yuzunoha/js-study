// (b.js)

// クロージャ
let cnt = 0;
const test = () => {
  const ret = cnt;
  cnt++;
  return ret;
};

// モジュール公開
module.exports = {
  x: '値',
  y: 'foo',
  z: 123,
  p: console.log,
  test: test
};

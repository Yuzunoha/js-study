// (a.js)

// 読み込み
const b = require('./b.js');

// 分割代入は名前でバインドするのか
const { z, y, x, test, p } = b;

console.log('x      : ' + x);
console.log('y      : ' + y);
console.log('z      : ' + z);
console.log('test() : ' + test());
console.log('test() : ' + test());
console.log('test() : ' + test());

'use strict';

const p = console.log;

const createIterable = limit => {
  const iterable = {};
  iterable[Symbol.iterator] = () => {
    const iterator = {};
    let count = 0;
    iterator.next = () => {
      const iteratorResult = {
        value: count,
        done: false
      };
      count++;
      if (limit < count) {
        iteratorResult.done = true;
      }
      return iteratorResult;
    };
    return iterator;
  };
  return iterable;
};

const main = () => {
  const iterable = createIterable(10);
  for (const v of iterable) {
    p(v);
  }
};

main();

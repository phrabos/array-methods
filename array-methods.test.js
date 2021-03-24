const { arrMap, arrFilter, arrFindIndex, arrReduce, arrEvery, } = require('./array-methods');

describe('array methods', () => {
  it('recreates the map method', () => {
    expect(arrMap([1, 2, 5, 7], num => num * num)).toEqual([1, 4, 25, 49]);
  });

  it('recreates the filter method', () => {
    expect(arrFilter([1, 2, 3, 4, 6], num => num % 2 === 0)).toEqual([2, 4, 6]);
  });

  it('recreates the findIndex method using strings', () => {
    expect(arrFindIndex(['dog', 'cat', 'dog', 'cat', 'mouse'], animal => animal === 'cat')).toEqual(1);
  });

  it('recreates the findIndex method using numbers', () => {
    expect(arrFindIndex([5, 7, 7, 1, 'mouse'], num => num === 1)).toEqual(3);
  });

  it('recreates the reduce method using addition', () => {
    expect(arrReduce([5, 7, 3], (acc, curr) => acc + curr)).toEqual(15);
  });

  it('recreates the reduce method using multiplication', () => {
    expect(arrReduce([5, 7, 3], (acc, curr) => acc * curr, 1)).toEqual(105);
  });

  it('recreates the every method using numbers', () => {
    expect(arrEvery([5, 7, 3], num => num % 2 === 0)).toEqual(false);
  });

  it('recreates the every method using numbers', () => {
    expect(arrEvery([3, 9, 7, 1, 11, 5], num => num % 2 !== 0)).toEqual(true);
  });

  it('recreates the every method using numbers', () => {
    expect(arrEvery([5, 7, 3, 2, 4], num => num % 2 === 0)).toEqual(false);
  });

  it('recreates the every method using numbers', () => {
    expect(arrEvery([12, 6, 8, 2, 4, 4], num => num % 2 === 0)).toEqual(true);
  });
});


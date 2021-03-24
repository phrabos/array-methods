const arrMap = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const callbackReturn = callback(arr[i]);
    newArr[i] = callbackReturn;
  }
  return newArr;
};

const arrFilter = (arr, callback) => {
  const newArr = [];
  let counter = 0;
  for(let i = 0; i < arr.length; i++) {
    const callbackReturn = callback(arr[i]);
    if(callbackReturn) {
      newArr[counter] = arr[i];
      counter++;
    }
  }
  return newArr;
};

const arrFindIndex = (arr, callback) => {
  let res = -1;
  for(let i = 0; i < arr.length; i++) {
    const callbackReturn = callback(arr[i]);
    if(callbackReturn) {
      res = i;
      break;
    }
  }
  return res;
};

const arrReduce = (arr, callback, init) => {
  let acc = 0;
  if(!init) {
    acc = 0;
  } else acc = init;
  for(let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], init);
  }
  return acc;
};

const arrEvery = (arr, callback) => {
  let init = true;
  for(let i = 0; i < arr.length; i++) {
    const callbackReturn = callback(arr[i]);
    if(!callbackReturn) {
      init = false;
      break;
    }
  }
  return init;
};

module.exports = {
  arrMap,
  arrFilter,
  arrFindIndex,
  arrReduce,
  arrEvery,
};

// import _ from 'lodash';
const R = require('ramda');
// import R from 'ramda';
// import axios from 'axios';

// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const prova = [2, 4, 10, 3, 34, 10, 2, 12, 34];

// Trova il numero massimo di una lista
const findMax = arr => {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] > arr[1]) {
    arr.splice(arr.indexOf(arr[1]), 1);
  } else if (arr[0] < arr[1]) {
    arr.splice(arr.indexOf(arr[0]), 1);
  } else if (arr[0] === arr[1]) {
    arr.splice(arr.indexOf(arr[0]), 1);
  }
  return findMax(arr);
};

// const max = findMax(prova);

// console.log(max);
// Conta il numero di elementi di una lista
const readLength = (arr, count = 0) => {
  if (arr <= 0) return count;
  let tempCount = count;
  tempCount += 1;
  arr.shift();
  return readLength(arr, tempCount);
};

console.log(readLength(prova));

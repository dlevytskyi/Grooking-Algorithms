import { selectionSort } from './algorithms/selectionSort';
import { binarySearch } from './algorithms/binarySearch';

console.log('BINARY SEARCH', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(
  'SELECTION SORT',
  selectionSort([1, 42, 23, 11, 51, 61, 17, 8, 9, 10])
);

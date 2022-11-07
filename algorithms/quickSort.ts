/* Implementation of the quick sort algorithm in typescript.
 * Returns asc ordered list
 * Complexity O(n * log n)
*/
export const quickSort = (array: number[]): number[] => {
  if (array.length < 2) return array;
  const pivotIndex: number = Math.round(array.length / 2);
  let pivot: number = array[pivotIndex];
  array.splice(pivotIndex, 1)
  let less: number[] = array.filter(el => el < pivot);
  let greater: number[] = array.filter(el => el > pivot);
  return quickSort(less).concat([pivot]).concat(quickSort(greater));
}

console.log(quickSort([1, 5, 3, 7, 10, 123, 1, 2]));
console.log(quickSort([10, 5, 2, 3]));
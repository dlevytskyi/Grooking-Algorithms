/* Implementation of the selection sort algorithm in typescript.
 * Returns asc ordered list
 * Complexity O(n^2)
*/
export const selectionSort = (array: number[]): number[] => {
  let sortedArr: number[] = [];

  while (array.length > 0) {
    const smallestElementIndex = findSmallest(array);
    sortedArr.push(array[smallestElementIndex]);
    array.splice(smallestElementIndex, 1);
  }
  return sortedArr;
};

// Function that finds smallest element of the array
const findSmallest = (array: number[]): number => {
  let smallest: number = array[0];
  let smallest_index: number = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallest_index = i;
    }
  }
  return smallest_index;
};

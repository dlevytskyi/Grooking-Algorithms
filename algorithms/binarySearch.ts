/* Function returns index of searched value from array. If element doesnt exists returns -1.
 * Input array shoud be sorted.
 */

export const binarySearch = (
  sortedArray: number[],
  searchedValue: number
): number => {
  let low: number = 0;
  let high: number = sortedArray.length - 1;
  while (low <= high) {
    const mid: number = low + high;
    const guess: number = sortedArray[mid];
    if (guess === searchedValue) return mid;
    if (guess > searchedValue) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

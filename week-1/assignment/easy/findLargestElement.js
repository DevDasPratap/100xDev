/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const numbers = [3, 7, 2, 9, 1]
function findLargestElement(numbers) {
    const sorted = numbers.sort((a,b)=> a-b)
    return sorted[sorted.length-1]
}
module.exports = findLargestElement;
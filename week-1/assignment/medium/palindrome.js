/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   str = str.toLowerCase()
//   let filteredStr = '';
//   for (let char of str) {
//     if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//       filteredStr += char;
//     }
//   }
//   if (filteredStr.length < 2) {
//     return true;
//   }
//   let left = 0
//   let right = filteredStr.length - 1
//   while (left < right) {
//     if (filteredStr[left] !== filteredStr[right]) {
//       return false
//     }
//     left++
//     right--
//   }

//   return true
// }
// isPalindrome('madam')

// function isPalindrome(str) {
//   str = str.toLowerCase()
//   let filteredStr = ''
//   for (const char of str) {
//     if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//       filteredStr += char;
//     }
//   }

//   if (filteredStr.length < 2) {
//     return true
//   }
//   let reveredStr = ''
//   for (let i = filteredStr.length - 1; i >= 0; i--) {
//     reveredStr += filteredStr[i]
//   }
//   return filteredStr === reveredStr
// }
// isPalindrome('madam')

function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const filteredStr = lowercaseStr.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
  const reversedStr = filteredStr.split('').reverse().join('');
  return filteredStr === reversedStr;
}

module.exports = isPalindrome;

function isPalindrome(word) {
  // Convert word to lowercase for case-insensitive comparison
  word = word.toLowerCase();

  // Initialize start and end pointers
  let start = 0;
  let end = word.length - 1;

  // Iterate until start pointer is less than end pointer
  while (start < end) {
      // If characters at start and end pointers are different, word is not a palindrome
      if (word[start] !== word[end]) {
          return false;
      }
      // Move start pointer forward and end pointer backward
      start++;
      end--;
  }
  // If loop completes without returning false, word is a palindrome
  return true;
}

// Test the function
console.log(isPalindrome("gag")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("php")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false

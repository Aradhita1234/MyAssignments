//check if a string is a palindrome

const input = "madam";
// Reverse the string
const reversed = input.split('').reverse().join('');

// Check if it's a palindrome
if (input === reversed) {
  console.log("Palindrome:", input); // Output: Palindrome: madam
} else {
  console.log("Not a palindrome");
}

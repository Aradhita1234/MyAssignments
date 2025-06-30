
//Home Assignment: Strings in JS
//Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
//palindrome, then test your function with various strings and print the results

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  console.log("Reversed:", reversed);

  if (str === reversed) {
    console.log("It is a palindrome.");
  } else {
    console.log("It is not a palindrome.");
  }
}

// Test with input = "madam"
isPalindrome("madam");
isPalindrome("playwright");
//Given a string s consisting of words and spaces, return the length of the last word in the string.
//Example 1:Input: s = "Hello World
function lengthOfLastWord(input) {
  input = input.trim();                      // Remove leading/trailing spaces->"   Hello World   "->"Hello World"
  let words = input.split(" ");              // Split into words->	["Hello", "World"]
  let lastWord = words[words.length - 1];    // Get the last word ->"World"
  let length = lastWord.length;              // Get its length->indexes start at 0, but length is just a total count, starting from 1
  return { word: lastWord, length: length }; // Return both as an object->word: "World", length: 5
}
let result1 = lengthOfLastWord("Hello World");
console.log(`The last word is "${result1.word}" with length ${result1.length}`);//world-5
let result2 = lengthOfLastWord("fly me to the moon");
console.log(`The last word is "${result2.word}" with length ${result2.length}`);//moon-4

//Write a function to check if two strings are anagrams
function isAnagram(str1,str2) {
  // Step 1: Remove spaces and convert to lowercase
  let s1 = str1.split(" ").join("").toLowerCase();//"silent"
  let s2 = str2.split(" ").join("").toLowerCase();//"listen"
  // Step 2: Sort the characters
  let sorted1 = s1.split('').sort().join('');//["s", "i", "l", "e", "n", "t"]->["e", "i", "l", "n", "s", "t"]->"eilnst"
  let sorted2 = s2.split('').sort().join('');//["l", "i", "s", "t", "e", "n"]->["e", "i", "l", "n", "s", "t"]->"eilnst"
  // Step 3: Compare sorted strings
  return sorted1 === sorted2;
}console.log(isAnagram("silent","listen"));//true
console.log(isAnagram("hello","world"));//false


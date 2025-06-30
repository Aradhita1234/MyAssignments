//Home Assignment: Odd or Even
// 1. Create a function named isOddOrEven that takes a number as a parameter
function isOddOrEven(number) 
{
// 2. Use a conditional statement to check if the number is divisible by 2
  if (number % 2 === 0) 
{
    return "Even";
} else {
    return "Odd";
  }
}
// 3. Declare and initialize the variable
let myNumber = 7;

// 4. Call the function and print the result
let result = isOddOrEven(myNumber);
console.log("The number", myNumber, "is", result);
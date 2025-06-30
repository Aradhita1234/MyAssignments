//Home Assignment:Assignment: Number Type
// 1. Create a function named checkNumberType that takes a number as a parameter
function checkNumberType(number) 
{
// 2. Use conditional statements to categorize the number
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
// 3. Declare and initialize the variable
let myNumber = -5;

// 4. Call the function and print the result
let result = checkNumberType(myNumber);
console.log("The number", myNumber, "is", result);
//Home Assignment: Grade Calculation
// 1. Create a function that takes a student's score as a parameter
function getGrade(score) {
// 2. Use switch with 'true' to evaluate ranges
  switch (true) {
    case (score >= 90 && score <= 100):
      return "A";
    case (score >= 80 && score < 90):
      return "B";
    case (score >= 70 && score < 80):
      return "C";
    case (score >= 60 && score < 70):
      return "D";
    case (score >= 0 && score < 60):
      return "F";
    default:
      return "Invalid score";
  }
}
// 3. Declare and initialize the variable
let studentScore = 85;

// 4. Call the function and print the result
let grade = getGrade(studentScore);
console.log(`The student's score is ${studentScore}, and the grade is: ${grade}`);
//Home Assignment: Conditional Statements // a) launchBrowser function using if-else
function launchBrowser(browserName) {
  if (browserName.toLowerCase() === "chrome") {
    console.log("Launching Chrome browser...");
  } else {
    console.log(`Browser "${browserName}" is not supported. Launching default browser...`);
  }
}
// b) runTests function using switch
function runTests(testType) {
  switch (testType.toLowerCase()) 
  {
    case "smoke":
      console.log("Running Smoke Tests...");
      break;
    case "sanity":
      console.log("Running Sanity Tests...");
      break;
    case "regression":
      console.log("Running Regression Tests...");
      break;
    default:
      console.log("Unknown test type. Running Smoke Tests by default...");
      break;
  }
}
// c) Calling the functions
let browser = "Chrome";
let test = "sanity";
launchBrowser(browser);
runTests(test);


//Home Assignment: JavaScript Functions
//Task 1: Function Declaration
function userProfile(name) 
{console.log(`Hello, ${name}!`);}
userProfile("Aradhita");
//Task 2: Arrow Function
const double = (num) => num * 2;
console.log("Double of 5:", double(5));
//Task 3: Anonymous Function
setTimeout(function() 
{console.log("This message is delayed by 2 seconds");}, 2000);
//Task 4: Callback Function
function getUserData(callback) 
{
  setTimeout(() => {
    const user = 
    {
      name: "Arshi",
      age: 24
    };
    callback(user);
  }, 3000);}
// Call getUserData and log name & age
getUserData(function(user) {
  console.log(`User Name: ${user.name}`);
  console.log(`User Age: ${user.age}`);
});


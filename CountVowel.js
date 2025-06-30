//count the number of vowels in a string
const input = "functiona"; //u,i,o,a->4 vowels
let count = 0;// will keep track of how many vowels we find
for (let i = 0; i <= input.length-1; i++) //This loop runs from i = 0 to i = input.length - 1.
// loop runs from i = 0 to i = 8 (because "functiona" has 9 characters).It visits each character in the string one by one.
{
    let char = input[i].toLowerCase();//gets the character at position i
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
    {
       count++;
    }
}
    console.log("Number of vowels:", count);



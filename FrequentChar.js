//find the most frequent character in a string
const input = "javascriptis"; //'a', 's', and 'i' each appear 2 times. But 'a' comes first, so it will be chosen.
let maxChar = '';// stores the most frequent character found so far.
let maxCount = 0;//stores the highest number of times any character has appeared

for (let i = 0; i <=input.length-1; i++) //loop starts with i = 0 and goes up to input.length - 1.
{
  let count = 0;//is used to count how many times input[i] appears in the string.
  for (let j = 0; j <=input.length-1; j++)// loop compares input[i] to every other character in the string.If they match, it increases the count.
  {
    if (input[i] === input[j]) //count will hold how many times input[i] occurs in the string
        {
           count++;
        }
  }
  if (count > maxCount) //If count is greater than maxCount, it means this character appears more than the previous most frequent one.
    {
      maxCount = count;//update maxCount.
      maxChar = input[i];//update maxChar.
    }
}
console.log("Most frequent character:", maxChar)
//Objectives
//  Create reusable blocks of code with functions.
//  Implement Array object methods.


// Take an array of numbers and return the sum.
function sum(a, b ,c ,d){
    let sumOfAll = a + b + c +d;
    console.log("The sum is" + " " + sumOfAll); // Equals 96
}
const num = [1, 22, 33, 40];
sum(...num) 



// Take an array of numbers and return the average.
function average(x, y ,z , v){
    let sumOfAll2 = x + y + z + v;
    console.log("The average is" + " " + sumOfAll2 / num2.length); // Equals 25 sum 
                                    // array / num2.length
}
const num2 = [10, 20, 30, 40];
average(...num2)



// Take an array of strings and return the longest string.

function longestString(a, b){
    let something = txt;
        something.sort(
            (txta, txtb) => {
                return txtb.length - txta.length;
            }
        )

        console.log("The longest string is" + " " +something[0]);
        console.log("The list before it was sorted" ,["John", "BatMan", "NYC", "TheBronxNY"])
        console.log("The new Sorted list" , txt)

}
let txt = ["John", "BatMan", "NYC", "TheBronxNY"];
longestString(...txt)














/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))*/
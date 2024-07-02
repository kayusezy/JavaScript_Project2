//String Manipulation Functions:

//Reverse a String
function nameReverse() {
    firstName = 'Toluwanimi';

    // Reverse the first name
    let reversedFirstName = firstName.split('').reverse().join('');
    return reversedFirstName
}

console.log(nameReverse()); 

//Count Characters
function countNum(params) {
    midName = "Mathematical";
    return midName.length;
}

console.log(countNum());

//Capitalize Words
function capWoords() {
    statement = "i am a student of gomycold studying software development"
    let capitalizedStatement = statement.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalizedStatement
}

console.log(capWoords());

// Array Functions:

// Find Maximum and Minimum

let numbers = [10, 20, 5, 15, 30];

function findMaxMin() {
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    return `Max Number: ${maxNum}, Min Number: ${minNum}`
}

console.log(findMaxMin());

//Sum of Array:

function sumArray(arr) {
    var  sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];    
    }
    return sum;
}

console.log(sumArray([1, 4, 7, 13]))

//Filter Array
numbers = [11, 28, 3, 43, 5, 16, 71, 13, 6, 9]
let filteredArray = numbers.filter(num => num > 10)
let filteredArray1 = numbers.filter(num => num < 10);

console.log("Numbers greater than 10: " + filteredArray);
console.log("Numbers less than 10: " + filteredArray1);

//Mathematical Functions

//Factorial:

function Factorial(n) {
    if (n === 1){
        return 1;
    }else{
        return n * Factorial(n-1);
    }
}

console.log(Factorial(5));

//Prime Number Check
function isPrime(num) {
    // Handle edge cases
    if (num <= 1) return false; 
    if (num <= 3) return true; 
  
    // If the number is divisible by 2 or 3, it's not prime
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    // Check for factors up to the square root of the number
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true; // If no factors were found, the number is prime
  }
  
  // Test the function
  console.log(isPrime(6));


  //Fibonacci Sequence:
  function generateFibonacci(numTerms) {
    if (numTerms <= 0) {
      return [];
    }
    
    const fibonacciSequence = [0];
    if (numTerms === 1) {
      return fibonacciSequence;
    }
    
    fibonacciSequence.push(1);
    for (let i = 2; i < numTerms; i++) {
      const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextTerm);
    }
    
    return fibonacciSequence;
  }
  
  // Test the function
  console.log(generateFibonacci(12));  
 
  
  
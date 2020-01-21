/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
Example 1:

Input: [1,2,3,1]
Output: true
*/
let array1 = [1,2,3,1] 

function findDoubles(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j=0; j < 4; j++){
            if(arr[i] == arr[j]){
                return true 
            }
        }
    return false
    } 
}


/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).



Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

*/

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
}
function findFibonnacciSequence(fib){
    let num= prompt("Please enter a number greater than 1: ")
    return fib[num]
}

/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

*/


/*
Write an algorithm(function) to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer,
 replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 
 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
 Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

function isHappyNumber() {
	var result = false;
	let number= prompt("Please enter a number greater than 0: ")
	var prevSums = new Object(); // this will act as a HashSet
	
	while ( !result && prevSums[ number ] == undefined ) {
		
		prevSums[ number ] = true; // add index to the HashSet
		
		var sum = 0;
		while ( number > 0 ) {
			
			sum += Math.pow( number % 10, 2 ); 
			number = Math.floor( number / 10 );
		}
		
		if ( sum == 1 )
			result = true; // if result is true, will break the outter while loop
		else 
			number = sum;
	}
	
	return result;
}
isHappyNumber();
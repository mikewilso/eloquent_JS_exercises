/*
Chapter 3, Exercise 1

Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b){
	if(a === b){
		console.log("Numbers are the same.");
	}
	else if(a > b){
		console.log(b + " is the minimum");
	}
	else console.log(a + " is the minimum");
}

min(0, 10);
min(43, 12);
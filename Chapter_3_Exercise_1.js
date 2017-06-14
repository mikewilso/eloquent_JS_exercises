/*
Chapter 3, Exercise 1

Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b){
	if(a === b){
		return a;
	}
	else if(a > b){
		return b;
	}
	else 
		return a;
}

min(0, 10);
min(43, 12);
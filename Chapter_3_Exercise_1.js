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

//more succint version that does not check for param equality, but works just the same
function min(a, b){
	if(a > b)
		return b;
	else
		return a;
}
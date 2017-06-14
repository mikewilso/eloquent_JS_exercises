/*
Chapter 3, Exercise 3

You can get the Nth character, or letter, from a string by writing "string".charAt(N), 
similar to how you get its length with "s".length. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position zero, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how 
many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

function countBs(word){
	var count = 0;
	for(var i = 0; i < word.length; i++){
		if(word.charAt(i) === "B" || word.charAt(i) === "b"){
			count += 1;
		}
		else continue;
	}
	console.log("Amount of Bs found: " + count);
	return count;
}

console.log(countBs("BBC", "b"))

function countChar(word, char){
	var count = 0;
	for(var i = 0; i < word.length; i++){
		if(word.charAt(i) === char.toUpperCase() || word.charAt(i) === char.toLowerCase()){
			count += 1;
		}
		else continue;
	}
	console.log("Amount of " + char + "\'s found: " + count);
	return count;
}

countChar("This is an Example sentence", "e");
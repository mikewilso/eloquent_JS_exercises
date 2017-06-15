/*
Chapter 4, Exercise 2: Reversing an Array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument 
in order to reverse its elements. Neither may use the standard reverse method.
*/

//returns new array with parameter array's values reversed
function reverseArray(arr){
	var newReversedArray = [];
	for(var i = arr.length - 1; i >= 0; i--){
		newReversedArray.push(arr[i]);
	}
	return newReversedArray;
}

//modifies original array to reverse order of values
function reverseArrayInPlace(arr){
	var arr_length = arr.length;
	var temp_arr = arr.slice();
	for(var i = arr_length - 1, j = 0; i >= 0; i--, j++){
		arr[i] = temp_arr[j];
	}
	console.log(arr);
}
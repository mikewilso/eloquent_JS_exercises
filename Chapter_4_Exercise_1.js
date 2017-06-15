/*
Chapter 4, Exercise 1: The Sum of a Range

Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used to build up the array. If no step is given, 
the array elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

//Original range function (assumes start is < end)
function rangeToArray(start, end){
	var newNumArray = [];
	for(var i = start; i <= end; i++){
		newNumArray.push(i);
	}
	return newNumArray;
}

rangeToArray(1, 10); 


//Add integer values in an array
function addArrayValues(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}

addArrayValues(rangeToArray(1, 10));


//Range function with bonus iterations step functionality
function rangeToArrayWithStep(start, end, step){
	var newNumArray = [];
	if(!step && start < end){
		step = 1;
	}
	else if(!step && start > end){
		step = -1;
	}
	//positive step integer assumes start < end
	if(step > 0){
		for(var i = start; i <= end; i += step){
			newNumArray.push(i);
		}
	}
	//negative step integer assumes start > end
	else if(step < 0){
		for(var i = start; i >= end; i += step){
			newNumArray.push(i);
		}
	}
	else {
		return [];
	}
	return newNumArray;

}

rangeToArrayWithStep(1, 10);
rangeToArrayWithStep(54, 2);
rangeToArrayWithStep(1, 10, 2);
rangeToArrayWithStep(54, 2, -1);

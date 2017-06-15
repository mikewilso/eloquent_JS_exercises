/*
Chapter 4, Exercise 4: Deep Comparison

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are 
objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".


*/

function deepEqual(obj1, obj2){
	//test to see if they are same right off the bat
	if(obj1 === obj2)
		return true;

	//if params are not objects, and/or are null(null evaluates to object), return false
	if(obj1 == null || typeof obj1 != "object" || 
		obj2 == null || typeof obj2 != "object")
		return false;

	var propsInObj1 = 0, propsInObj2 = 0;

	for (prop in obj1)
		propsInObj1 += 1;

	for (prop in obj2){
		propsInObj2 += 1;

		if(!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
			return false;
	}
	return propsInObj1 == propsInObj2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
/*
Chapter 6, Exercise 1: A Vector Type

Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), 
which it should save to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new 
vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, 
the distance of the point (x, y) from the origin (0, 0).

*/

var Vector = function(x, y){
	this.x : x,
	this.y : y,
	get vLength(){
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

}

var newVector = new Vector(3, 4);

console.log(newVector);
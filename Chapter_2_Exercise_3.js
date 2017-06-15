/*
Chapter 2, Exercise 3

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/


//Creates square board based off one number
function printChessBoard(num){
	var line1 = "", line2 = "";
	for(var i = 0; i < num; i++){
		if(i % 2 === 0){
			line1 += "#";
			line2 += " ";
		}
		else {
			line1 += " ";
			line2 += "#";
		}
	};

	for(var j = 0; j < num; j++){
		if(j % 2 === 0){
			console.log(line1);
		}
		else console.log(line2);
	}
}

printChessBoard(8);


//Creates board with specific width and height
function printChessBoardPlus(width, height){
	var line1 = "", line2 = "";
	for(var i = 0; i < width; i++){
		if(i % 2 === 0){
			line1 += "#";
			line2 += " ";
		}
		else {
			line1 += " ";
			line2 += "#";
		}
	};

	for(var j = 0; j < height; j++){
		if(j % 2 === 0){
			console.log(line1);
		}
		else console.log(line2);
	}
}

printChessBoardPlus(7, 10);


//This version uses nested loops and returns a single string using new line characters instead of separate console logs, as per the instructions
function chessBoardString(size){
	var chessBoard = "";
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			if((i + j) % 2 == 0){
				chessBoard += "#";
			}
			else chessBoard += " ";				
		}
		chessBoard += "\n";
	}
	return chessBoard;
}

chessBoardString(8);

//Nested loop version with width and height params
function chessBoardStringPlus(width, height){
	var chessBoard = "";
	for(var i = 0; i < height; i++){
		for(var j = 0; j < width; j++){
			if((i + j) % 2 == 0){
				chessBoard += "#";
			}
			else chessBoard += " ";				
		}
		chessBoard += "\n";
	}
	return chessBoard;
}

chessBoardStringPlus(8, 13);
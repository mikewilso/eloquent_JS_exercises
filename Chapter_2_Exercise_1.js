/* Chapter 2, Exercise 1

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 

*/

function printPyramid(char, num){
	for(var i = 0; i < num; i++){
		var layer = char.repeat(i + 1);
		console.log(layer);
	}
}

printPyramid("#", 7);
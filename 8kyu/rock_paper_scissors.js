/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/
/*
const rps = (p1, p2) => {
	//well this is if else statements, but we can create an object later
	if(p1 == p2){
		return "Draw!";
	} 
	if(p1 == "rock" && p2 == "scissors" || p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock"){
		return "Player 1 won!";
	} 
	else{
		return "Player 2 won";
	}
}
*/



const rps = (p1, p2) => {
	// we can create an object 
	let obj = {
		'rock':'scissors',
		'scissors':'paper',
		'paper':'rock'
	};
	if(p1 == p2){
		return "Draw!";
	}
	if(p2 == obj[p1]){ //if p1 == any rule inside of the object, return p1 won
		return "Player 1 won!";
	}else{
		return "Player 2 won";
	}
}


const getMsg = (n) => `Player ${n} won!`;

console.log(rps('rock', 'scissors'), getMsg(1));
console.log(rps('scissors', 'paper'), getMsg(1));
console.log(rps('paper', 'rock'), getMsg(1));

console.log(rps('scissors', 'rock'), getMsg(2));
console.log(rps('paper', 'scissors'), getMsg(2));
console.log(rps('rock', 'paper'), getMsg(2));

console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
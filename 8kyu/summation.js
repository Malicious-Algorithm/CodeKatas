function sum(num){
	let s = 0;

	for (let i = num; i>0; i--) {
		 s = i - (i-1);	
	}
	return s;
	 
}

console.log(sum(8),36);
//lograr = 1+2+3+4+5+6+7+8  == 36

let num = 8;
let s = 0;
for (let i = 1; i<=num; i++) {
		//console.log(i + " ");
		 s+=i
		 console.log(s + " ");
	}


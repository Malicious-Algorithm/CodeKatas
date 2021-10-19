/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
 It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty.
All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/

function DNAtoRNA(dna) {
	//a place to store the new string
	let newString = "";
	//iterate over the array
	for (var i = 0; i < dna.length; i++) {
		//if we find a T append a U to the new String	
		if(dna[i] == "T"){
			newString += "U";
			break;
		}
		newString += dna[i]
	}
	//return the new string
	return newString
}



function DNAtoRNA(dna) {
	//a place to store the new string
	let newString = "";
	//iterate over the array
	for (var i = 0; i < dna.length; i++) {
		//if we find a T append a U to the new String	
		if(dna[i] == 'T'){
			newString += 'U';
			//and continue iterating
			continue;

		}else{
			//else push the letters into the newString
			newString += dna[i]
		}
	}
	//return the new string
	return newString;
}

//podriamos hacer un objeto


function DNAtoRNA(dna) {
	//a place to store the new string
	let newString = "";
	//create an object with the vals and properties
	let object = {
		'T':'U', //T is going to be a U
		'G':'G', //the rest stays the same
		'C':'C',
		'A':'A'
	};

	for (var i = 0; i < dna.length; i++) {
		let currentLetter = dna[i];
		newString += object[currentLetter]; //here we append the letters 
								//of the object to the newstring 
	}
	//and we return the newString
	return newString;
}
console.log(DNAtoRNA("TTTT"), "UUUU");

console.log(DNAtoRNA("GCAT"), "GCAU");

console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");

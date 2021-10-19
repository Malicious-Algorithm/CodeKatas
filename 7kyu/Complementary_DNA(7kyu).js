/*

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
*/

function DNAStrand(dna){

	//a place to store the newtring
	let newstring = '';
	//iterate over the array
	for (var i = 0; i < dna.length; i++) {
		//if current letter is an A
		if (dna[i] == 'A') {
			//append a T
			newstring += 'T';

		//else if current letter is a T
		}else if(dna[i] == 'T'){
			//append an A
			newstring += 'A';

		//if current letter is an G
		}else if(dna[i] == 'G'){
			//append a C
			newstring += 'C';

		//else if current letter is a C
		}else if(dna[i] == 'C'){
			//append G
			newstring += 'G';
		}
	}

	//return the newstring
	return newstring;
}

//ok that's not good i know, so instead of if and else, we can use an object

function DNAStrand(dna){
	let newstring = '';
	const obj = { 
		'A':'T',
		'T':'A',
		'G':'C',
		'C':'G'
	};

	for (var i = 0; i < dna.length; i++) {
			newstring += obj[dna[i]] 	
	}
	
	return newstring;
}

console.log(DNAStrand("AAAA"),"TTTT");
console.log(DNAStrand("ATTGC"),"TAACG");
console.log(DNAStrand("GTAT"),"CATA");
let str1 = "I love Javascript";
let str2 = "I don't love football";
console.log(findMostRepeatedWord(str1, str2));

function findMostRepeatedWord(str1, str2) {
	let words1 = str1.match(/\w+/g);
	let words2 = str2.match(/\w+/);
	console.log(words);

	let occurances = {};

	for (let word of words) {
		if (occurances[word]) {
			occurances[word]++;
		} else {
			occurances[word] = 1;
		}
	}

	console.log(occurances);

	let max = 0;
	let mostRepeatedWord = "";

	for (let word of words) {
		if (occurances[word] > max) {
			max = occurances[word];
			mostRepeateWord = word;
		}
	}
	return mostRepeateWord;
}

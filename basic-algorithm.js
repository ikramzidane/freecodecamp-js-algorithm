// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

let convertToF = celsius => {
	return (celsius * (9/5)) +32
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

let reverseString = str => {
	return str.split("").reverse().join("");
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

let factorialize = num => {
	let total = 1;
	
	for(let i = 1; i <= num; i++) {
		total *= i;
	}

	return total;
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

let findLongestWordLength = str => {
	return Math.max(...str.split(" ").map(val => val.length));
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

let largestOfFour = arr => {
	return arr.map(innerArr => {
		return Math.max(...innerArr);
	});
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// Note: not allowed ES6 .endswith method...

let confirmEnding = (str, target) => {
	return str.substr(-1 * target.length) === target;
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

let repeatStringNumTimes = (str, num) => {
	if(num < 1) return '';

	let finalString = '';

	for(let i = 0; i < num; i++) {
		finalString += str;		
	}

	return finalString;
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

let truncateString = (str, num) => {
	let substr = str.substr(0, num);

	if(substr.length === str.length) return substr;

	return `${substr}...`;
}




// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

let findElement = (arr, func) => {
	let firstIndexPassed = arr.findIndex(func);
	
	if(firstIndexPassed > -1) return arr[firstIndexPassed];

	return undefined;
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

let booWho = bool => {
	return typeof bool === 'boolean';
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

let titleCase = str => {
	let strLower = str.toLowerCase();

	return strLower.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

let frankenSplice = (arr1, arr2, n) => {
	let arr1Clone = arr1.slice(0);
	let arr2CloneFront = arr2.slice(0, n);
	let arr2CloneBack = arr2.slice(n);

	return arr2CloneFront.concat(arr1Clone, arr2CloneBack);
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

let bouncer = arr => {
	return arr.filter(value => Boolean(value) !== false);
}



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

let getIndexToIns = (arr, num) => {

	if(arr.length === 0) return 0;

	let sortedArr = arr.sort((a, b) => a > b);

	if( num >= sortedArr[sortedArr.length - 1] ) return sortedArr.length;

	return sortedArr.findIndex(value => value >= num);
}




// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

let mutation = arr => {
	let arr1Lowercase = arr[0].toLowerCase();
	let arr2Sorted = arr[1].toLowerCase().split("");

	return arr2Sorted.every(value => {
		return arr1Lowercase.indexOf(value) > -1;
	});
}




// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

let chunkArrayInGroups = (arr, size) => {
	let arrSize = arr.length;
	let totalIteration = arrSize / size;
	let finalArr = [];

	for(let i = 0; i < totalIteration; i++) {
		finalArr.push( arr.slice( i * size, (i * size) + size) );
	}

	return finalArr;
}


module.exports = {
	convertToF,
	reverseString,
	factorialize,
	findLongestWordLength,
	largestOfFour,
	confirmEnding,
	repeatStringNumTimes,
	truncateString,
	findElement,
	booWho,
	titleCase,
	frankenSplice,
	bouncer,
	getIndexToIns,
	mutation,
	chunkArrayInGroups,
}

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

let sumAll = arr => {
  let totalSum = 0;
  let smallerNumber = arr[0] > arr[1] ? arr[1] : arr[0];
  let greaterNumber = arr[0] === smallerNumber ? arr[1] : arr[0];

  for(let i = smallerNumber; i <= greaterNumber; i++) {
    totalSum += i;
  };
  
  return totalSum;
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

let diffArray = (arr1, arr2) => {
  let symmetricDiffArr = [];

  for(let i = 0; i < arr1.length; i++) {
    let indexInArray2 =  arr2.findIndex(value => value === arr1[i]);

    if(indexInArray2 === -1) {
      symmetricDiffArr.push(arr1[i]);
    } else {
      arr2[indexInArray2] = null;
    }
  }

  let arrNullRemoved = arr2.filter(value => value != null);

  return symmetricDiffArr.concat(arrNullRemoved);
}






// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

let destroyer = (...args) => {
  let bigArr = args[0];

  for(let i = 1; i < args.length; i++) {
    for(let j = 0; j < bigArr.length; j++) {
      if(bigArr[j] === args[i]) bigArr[j] = null;
    }
  }

  return bigArr.filter(a => a != null);
}







// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

let whatIsInAName = (collection, source) => {
  let arr = collection;

  for(let sourceKey in source) {
    arr = arr.filter(obj => {
      if(!obj.hasOwnProperty(sourceKey)) return false;
      return obj[sourceKey] === source[sourceKey];
    });
  }

  return arr;
}




// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

let spinalCase = str => {
  let strArr = str.match(/[A-Z][a-z]+|[a-z]+/g);

  return strArr.join('-').toLowerCase();
};







// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

let translatePigLatin = str => {
  let firstVowel = str.match(/[aeiou]{1}/i);

  if(firstVowel == null) return `${str}ay`;
  if(firstVowel.index === 0) return `${str}way`;

  let latinExt = str.substring(0, firstVowel.index);
  let engChopped = str.substring(firstVowel.index);

  return `${engChopped}${latinExt}ay`;
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace 

let myReplace = (str, before, after) => {
  let isFirstLetterUppercase = before.charAt(0).toUpperCase() === before.charAt(0);

  after = isFirstLetterUppercase ? after.charAt(0).toUpperCase() + after.substr(1) : after.charAt(0).toLowerCase() + after.substr(1);

  return str.replace(before, after);
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

let pairElement = str => {
  let arr = [];
  let strArr = str.split("");
  
  for(let i = 0; i < strArr.length; i++) {
    let otherChar = '';
    switch(strArr[i]) {
      case 'A':
        otherChar = 'T';
        break;
      case 'T':
        otherChar = 'A';
        break;
      case 'C':
        otherChar = 'G';
        break;
      case 'G':
        otherChar = 'C';
        break;
    }
    //** ^ Not a good solution, better to define a map object */
    arr.push([strArr[i], otherChar]);
  }
  return arr;
}






// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

let fearNotLetter = str => {
  let strArr = str.toLowerCase().split('');

  for(let i = 0; i < strArr.length; i++) {
    if(i === strArr.length - 1) return undefined;
    let isMissing = strArr[i + 1].charCodeAt(0) - strArr[i].charCodeAt(0) !== 1;

    if(isMissing) return String.fromCharCode(strArr[i].charCodeAt(0) + 1);
  }
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

let uniteUnique = (...arrs) => {
  let refArr = arrs[0];
  let addArr = [];

  for(let i = 1; i < arrs.length; i++) {
    for(let j = 0; j < refArr.length; j++) {
      arrs[i] = arrs[i].filter(value => value !== refArr[j]);
    }
    if(arrs[i].length) addArr = addArr.concat(arrs[i]);
  }
  return refArr.concat(addArr);
}








// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

let convertHTML =  str => {
  let replacedText = str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&​quot;')
    .replace(/'/g, '&​apos;');
  
  return replacedText;
}




// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

let sumFibs = num => {
  let fibonacciNums = [1, 1];

  let _addFibNum = (a, b) => {
    if(a + b > num) return;
    fibonacciNums.push(a + b);
    _addFibNum(b, a + b);
  }

  _addFibNum(fibonacciNums[0], fibonacciNums[1]);

  let sumOfOddFibNums = fibonacciNums.reduce((total, current) => {
    if(current % 2 !== 0) return total + current;
    return total;
  })

  return sumOfOddFibNums;
};





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

let sumPrimes = num => {
  let allInts = [...Array(num + 1).keys()].slice(2);
  let primeNumbers = [2];

  allInts.forEach(a => {
    let isPrimeNumber = primeNumbers.every(divider => a % divider !== 0);
    if(isPrimeNumber) primeNumbers.push(a);
  })

  return primeNumbers.reduce((total, current) => total + current);
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

let smallestCommons = arr => {
  let sortedArr = arr.sort((a,b) => a > b);
  let minInt = sortedArr[0];
  let maxInt = sortedArr[1];
  let intRange = [];

  for(let i = minInt; i <= maxInt; i++) {
    intRange.push(i);
  }

  for(let i = maxInt; true; i += maxInt) {
    let isDivisibleByAll = intRange.every(value => i % value === 0);
    if(isDivisibleByAll) return i;
  }
}







// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

let dropElements = (arr, func) => {
	let indexConditionMet = arr.findIndex(func);

	if(indexConditionMet === -1) return [];
	return arr.slice(indexConditionMet);
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

let steamrollArray = arr => {
  let flattenArr = [];

  let _steamrollArray = arr => {
    for(let i = 0; i < arr.length; i++) {
      let isArray = Array.isArray(arr[i]);
  
      if(isArray) {
        _steamrollArray(arr[i]);
      } else {
        flattenArr.push(arr[i]);
      }
    }
  };

  _steamrollArray(arr);

	return flattenArr;
}





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

let binaryAgent = binary => {
  let binaryArr = binary.split(' ');
  let asciArr = binaryArr.map(_binary => String.fromCharCode(parseInt(_binary, 2)));

  return asciArr.join('');
}






// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

let truthCheck = (collection, pre) => {
  return collection.every(obj => {
    if(!obj.hasOwnProperty(pre)) return false;
    if(Boolean(obj[pre])) return true;
    return false;
  })
};






// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

let addTogether = (...args) => {
  let isAllNumbers = args.every(value => typeof value === 'number');
  if(!isAllNumbers || args.length === 0) return undefined;
  
  if(args.length === 1) {
    return (num) => {
      if(typeof num !== 'number') return undefined;
      return args[0] + num;
    }
  } 

  return args.reduce((total, num) => total + num);
};





// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

let Person = function(firstAndLast) {

  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
  return firstAndLast;
}






// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

let orbitalPeriod = arr => {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  let calculateOP = avgAlt => {
    return Math.round( 2 * Math.PI * Math.sqrt( Math.pow( earthRadius + avgAlt , 3) / GM ) );
  }

  return arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calculateOP(obj.avgAlt)
    }
  })
}






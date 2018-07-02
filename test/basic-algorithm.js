const expect = require('chai').expect;
const basicAlgorithm = require('../basic-algorithm');


describe('Basic Algorithm', () => {
    describe('Convert Celsius to Fahrenheit', () => {
        it('should return a number', () => {
            expect(basicAlgorithm.convertToF(0)).to.be.a('number');
        });
        it('should converts celcius to Farenheit', () => {
            expect(basicAlgorithm.convertToF(-30)).to.equal(-22);
            expect(basicAlgorithm.convertToF(-10)).to.equal(14);
            expect(basicAlgorithm.convertToF(0)).to.equal(32);
            expect(basicAlgorithm.convertToF(20)).to.equal(68);
            expect(basicAlgorithm.convertToF(30)).to.equal(86);
        });
    })

    describe('Reverse a String', () => {
        it('should return a string', () => {
            expect(basicAlgorithm.reverseString('hello')).to.be.a('string');
        });
        it('should reverse the string', () => {
            expect(basicAlgorithm.reverseString('hello')).to.equal('olleh');
            expect(basicAlgorithm.reverseString('Howdy')).to.equal('ydwoH');
            expect(basicAlgorithm.reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
        });
    });

    describe('Factorialize a Number', () => {
        it('should return a number', () => {
            expect(basicAlgorithm.factorialize(5)).to.be.a('number');
        });
        it('should return the factorial of the provided integer', () => {
            expect(basicAlgorithm.factorialize(5)).to.equal(120);
            expect(basicAlgorithm.factorialize(10)).to.equal(3628800);
            expect(basicAlgorithm.factorialize(20)).to.equal(2432902008176640000);
            expect(basicAlgorithm.factorialize(0)).to.equal(1);
        });
    });

    describe('Find the Longest Word in a String', () => {
        it('should return a number', () => {
            expect(basicAlgorithm.findLongestWordLength('The quick brown fox jumped over the lazy dog')).to.be.a('number');
        });
        it('should return the length of the longest word in the provided sentence', () => {
            expect(basicAlgorithm.findLongestWordLength('The quick brown fox jumped over the lazy dog')).to.equal(6);
            expect(basicAlgorithm.findLongestWordLength('May the force be with you')).to.equal(5);
            expect(basicAlgorithm.findLongestWordLength('Google do a barrel roll')).to.equal(6);
            expect(basicAlgorithm.findLongestWordLength('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
            expect(basicAlgorithm.findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')).to.equal(19);
        });
    });

    describe('Largest Numbers in Arrays', () => {
        it('should return a array', () => {
            expect(basicAlgorithm.largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.a('array');
        });
        it('should return the factorial of the provided integer', () => {
            expect(basicAlgorithm.largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.eql([27,5, 39, 1001]);
            expect(basicAlgorithm.largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).to.eql([9, 35, 97, 1000000]);
            expect(basicAlgorithm.largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])).to.eql([25, 48, 21, -3]);
        });
    });


    describe('Confirm the Ending', () => {
        it('should return true for exact endings', () => {
            expect(basicAlgorithm.confirmEnding("Bastian", "n")).to.be.true;
            expect(basicAlgorithm.confirmEnding("Congratulation", "on")).to.be.true;
            expect(basicAlgorithm.confirmEnding("He has to give me a new name", "name")).to.be.true;
            expect(basicAlgorithm.confirmEnding("Open sesame", "same")).to.be.true;
            expect(basicAlgorithm.confirmEnding("Abstraction", "action")).to.be.true;
        });

        it('should return false for inexact endings', () => {
            expect(basicAlgorithm.confirmEnding("Connor", "n")).to.be.false;
            expect(basicAlgorithm.confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.be.false;
            expect(basicAlgorithm.confirmEnding("Open sesame", "pen")).to.be.false;
            expect(basicAlgorithm.confirmEnding("Open sesame", "game")).to.be.false;
            expect(basicAlgorithm.confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.be.false;
        })
    });

    describe('Repeat a String Repeat a String', () => {
        it('should return repeated form of the string', () => {
            expect(basicAlgorithm.repeatStringNumTimes("*", 3)).to.equal("***");
            expect(basicAlgorithm.repeatStringNumTimes("abc", 3)).to.equal("abcabcabc");
            expect(basicAlgorithm.repeatStringNumTimes("abc", 4)).to.equal("abcabcabcabc");
            expect(basicAlgorithm.repeatStringNumTimes("abc", 1)).to.equal("abc");
            expect(basicAlgorithm.repeatStringNumTimes("*", 8)).to.equal("********");
            expect(basicAlgorithm.repeatStringNumTimes("abc", -2)).to.equal("");
        })
    })

    describe('Truncate a String', () => {
        it('should truncates the string correctly', () => {
            expect(basicAlgorithm.truncateString("A-tisket a-tasket A green and yellow basket", 8)).to.equal("A-tisket...");
            expect(basicAlgorithm.truncateString("Peter Piper picked a peck of pickled peppers", 11)).to.equal("Peter Piper...");
            expect(basicAlgorithm.truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).to.equal("A-tisket a-tasket A green and yellow basket");
            expect(basicAlgorithm.truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).to.equal("A-tisket a-tasket A green and yellow basket");
            expect(basicAlgorithm.truncateString("A-", 1)).to.equal("A...");
            expect(basicAlgorithm.truncateString("Absolutely Longer", 2)).to.equal("Ab...");
        });
    })

    describe('Finders Keepers', () => {
        it('should return the first element in the array that passes a truth test', () => {
            expect(basicAlgorithm.findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).to.equal(8);
        })
        it('should return undefined when no element passes the test', () => {
            expect(basicAlgorithm.findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).to.be.an('undefined');
        })
    })

    describe('Boo who', () => {
        it('should return true when value passed is boolean primitive', () => {
            expect(basicAlgorithm.booWho(true)).to.be.true;
            expect(basicAlgorithm.booWho(false)).to.be.true;
        })
        it('should return false when value passed is NOT boolean primitive', () => {
            expect(basicAlgorithm.booWho([1, 2, 3])).to.be.false;
            expect(basicAlgorithm.booWho([].slice)).to.be.false;
            expect(basicAlgorithm.booWho({ "a": 1 })).to.be.false;
            expect(basicAlgorithm.booWho(1)).to.be.false;
            expect(basicAlgorithm.booWho(NaN)).to.be.false;
            expect(basicAlgorithm.booWho("a")).to.be.false;
            expect(basicAlgorithm.booWho("true")).to.be.false;
            expect(basicAlgorithm.booWho("false")).to.be.false;
        })
    })

    describe('Title Case a Sentence', () => {
        it('should return a string', () => {
            expect(basicAlgorithm.titleCase("I'm a little tea pot")).to.be.a('string');
        })
        it('should capitalized each words', () => {
            expect(basicAlgorithm.titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
            expect(basicAlgorithm.titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");
            expect(basicAlgorithm.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");
        })
    })

    describe('Slice and Splice', () => {
        it('should return an array that copies the elements in 1st array into 2nd array in correct order', () => {
            expect(basicAlgorithm.frankenSplice([1, 2, 3], [4, 5], 1)).to.eql([4, 1, 2, 3, 5]);
            expect(basicAlgorithm.frankenSplice([1, 2], ["a", "b"], 1)).to.eql(["a", 1, 2, "b"]);
            expect(basicAlgorithm.frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)).to.eql(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
        })
    })

    describe('Falsy Bouncer', () => {
        it('should return empty array if all values are falsy', () => {
            expect(basicAlgorithm.bouncer([false, null, 0, NaN, undefined, ""])).to.be.empty;
        })
        it('should remove falsy values', () => {
            expect(basicAlgorithm.bouncer([7, "ate", "", false, 9])).to.eql([7, "ate", 9]);
            expect(basicAlgorithm.bouncer(["a", "b", "c"])).to.eql(["a", "b", "c"]);
            expect(basicAlgorithm.bouncer([1, null, NaN, 2, undefined])).to.eql([1, 2]);
        })
    })
    describe('Where do I Belong', () => {
        it('should return a number', () => {
            expect(basicAlgorithm.getIndexToIns([10, 20, 30, 40, 50], 35)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([10, 20, 30, 40, 50], 30)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([40, 60], 50)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([3, 10, 5], 3)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([5, 3, 20, 3], 5)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([2, 20, 10], 19)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([2, 5, 10], 15)).to.be.a('number');
            expect(basicAlgorithm.getIndexToIns([], 1)).to.be.a('number');
        })
        it('should return the lowest index at which the 2nd argument needs to be inserted', () => {
            expect(basicAlgorithm.getIndexToIns([10, 20, 30, 40, 50], 35)).to.equal(3);
            expect(basicAlgorithm.getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2);
            expect(basicAlgorithm.getIndexToIns([40, 60], 50)).to.equal(1);
            expect(basicAlgorithm.getIndexToIns([3, 10, 5], 3)).to.equal(0);
            expect(basicAlgorithm.getIndexToIns([5, 3, 20, 3], 5)).to.equal(2);
            expect(basicAlgorithm.getIndexToIns([2, 20, 10], 19)).to.equal(2);
            expect(basicAlgorithm.getIndexToIns([2, 5, 10], 15)).to.equal(3);
            expect(basicAlgorithm.getIndexToIns([], 1)).to.equal(0);
        })
    })

    describe('Mutations', () => {
        it('should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array', () => {
            expect(basicAlgorithm.mutation(["hello", "Hello"])).to.be.true;
            expect(basicAlgorithm.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.be.true;
            expect(basicAlgorithm.mutation(["Mary", "Army"])).to.be.true;
            expect(basicAlgorithm.mutation(["Mary", "Aarmy"])).to.be.true;
            expect(basicAlgorithm.mutation(["Alien", "line"])).to.be.true;
            expect(basicAlgorithm.mutation(["floor", "for"])).to.be.true;
        })
        it('should return false otherwise', () => {
            expect(basicAlgorithm.mutation(["hello", "hey"])).to.be.false;
            expect(basicAlgorithm.mutation(["hello", "neo"])).to.be.false;
            expect(basicAlgorithm.mutation(["voodoo", "no"])).to.be.false;
        });
    })


    describe('Chunky Monkey', () => {
        it('should splits the array into correct size and returns a 2-d array', () => {
            expect(basicAlgorithm.chunkArrayInGroups(["a", "b", "c", "d"], 2)).to.eql([["a", "b"], ["c", "d"]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).to.eql([[0, 1, 2], [3, 4, 5]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).to.eql([[0, 1], [2, 3], [4, 5]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).to.eql([[0, 1, 2, 3], [4, 5]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).to.eql([[0, 1, 2], [3, 4, 5], [6]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).to.eql([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
            expect(basicAlgorithm.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).to.eql([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
        })
    })
})
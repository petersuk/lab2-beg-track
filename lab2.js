'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
 var dowington = 1000;

 function Blob () {
  this.personsConsumed = 0;
  }

  var blob = new Blob();
  for (var i = 0; i < dowington; i++) {
    blob.personsConsumed += i;
    if (blob.peopleConsumed > dowington) {
      var time = i;
      break;
    }
  }

  var hoursSpentInDowington = time;

 //TODO: Then, use a loop to calculate how long it took the blob to finish
 //with Dowington.
Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  var localPeopleEaten = 0;
  var i = 0;
  while (localPeopleEaten < population) {
    localPeopleEaten += peoplePerHour + i;
    i++;
  }

  return i;
};
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(2000, 1) < hoursSpentInDowington, 'Help! He\'s on a rampage!');
assert(blob.hoursToOoze(1000, 3) < hoursSpentInDowington, 'He\'s slowing down! Run!');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.


// TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor

function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
   if (sb.language == 'romulan') {
    console.log(hello[this.language]);
    return (hello.romulan);

  }

  if (sb.language == 'klingon') {
    console.log(hello[this.language]);
    return (hello.klingon);
  }

  if (sb.language == 'federation standard') {
    console.log(hello[this.language]);
    return (hello['federation standard']);
  }
};
//TODO: put this on the SentientBeing prototype

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
function Human() {}

function Klingon() {}

function Romulan() {}

var klingon = new SentientBeing("Qo\"Nos", "klingon");
var romulan = new SentientBeing("Romulus", "romulan");
var human = new SentientBeing("Earth", "federation standard");

assert(Human.sayHello(Klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  var largestNumber = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}


// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, '[1,3,2]');
assert(max([ 1, 3, 15 ]) === 15, '[1,3,15]');
assert(max([ 60, 3, 2 ]) === 60, '[60,3,2]');
assert(max([ 1, 18, 2 ]) === 18, '[1,18,2]');

function variablify(string) {

// TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

var arrayedString = string.split(" ");
  var camelCasify = arrayedString[0].toLowerCase();
  for (var i = 1; i < arrayedString.length; i++) {
    var nextWord = arrayedString[i];
    camelCasify += nextWord.charAt(0).toUpperCase();
    for (var j = 1; j < nextWord.length; j++) {
      camelCasify += nextWord.charAt(j).toLowerCase();
    }
  }
  return camelCasify;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('dog cat hamster') === 'dogCatHamster',
  'variablify(\'one two three\')');
assert(variablify('head shoulders knees') === 'headShouldersKnees',
  'variablify(\'one two three\')');
assert(variablify('ice ice baby') === 'iceIceBaby',
  'variablify(\'one two three\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************

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

 TODO: First, make a constructor function, called Blob, that makes blobs.*/
 function Blob (personsConsumed, rateOfConsumption) {
  this.personsConsumed = personsConsumed;
  this.rateOfConsumption = rateOfConsumption;
  this.totalTime = 0;
 }

 //TODO: Next, create an instance of Blob named blob.//
 var blob = new Blob();

 //TODO: Then, use a loop to calculate how long it took the blob to finish
 //with Dowington.
 var dowington = 1000;

 function rateOfBlob(hours) {
  var peopleEaten = hours + 1;
  return peopleEaten;
 }

 var blob = new Blob(0,1);

 for (var rateOfConsumption = 1; rateOfConsumption <= 1001; rateOfConsumption++) {
  this.totalTime += (60 / rateOfConsumption);
 }

 blob.conversion = function() {
  var result = (this.totalTime / 60);
  var hours = Math.floor(result);
  return (hours);
 };


var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
blob.conversion();
console.log(hoursSpentInDowington);

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  for (peoplePerHour; peoplePerHour <= population; peoplePerHour++) {
    this.totalTime += (60 / peoplePerHour);
  }
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
};

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
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.language]);
    return hello[sb.language];
  }
  //TODO: put this on the SentientBeing prototype
SentientBeing.prototype = {};
SentientBeing.prototype.sayHello = sayHello;

function Klingon() {
  this.parent = 'SentientBeing';
}
function Romulan() {
  this.parent = 'SentientBeing';
}
function Human() {
  this.parent = 'SentientBeing';
}


// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var Klingon = new SentientBeing('Qo\'noS', 'nuqneH'); // TODO: make a klingon
var Romulan = new SentientBeing('Romulus', 'Jolan\'tru'); // TODO: make a romulan
var Human = new SentientBeing('Earth', 'hello'); // TODO: make a human

assert(Human.sayHello(Klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(Human.sayHello(Romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(Romulan.sayHello(Klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(Romulan.sayHello(Human) === 'hello',
  'the human should hear hello');
assert(Klingon.sayHello(Romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(Klingon.sayHello(Human) === 'hello',
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(Math, array);
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, '[1,3,2]');
assert(max([ 1, 3, 15 ]) === 15, '[1,3,15]');
assert(max([ 60, 3, 2 ]) === 60, '[60,3,2]');
assert(max([ 1, 18, 2 ]) === 18, '[1,18,2]');

// TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

function variablify(string) {
  var splitString = string.split(' ');
  var value = [];
  var i = 0;

  for (i = 0, i < splitString; i++) {
    if (i! === 0) {
      value.push(splitString[i].charAt(0).toUpperCase()splitString[i].slice(1));
    }
    else {
      value.push(splitString[i]);
    }
  }
  var joinedWords = value.join('');
  return joinedWords;
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

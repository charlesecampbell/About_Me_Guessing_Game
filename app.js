'use strict';//strict syntax



let name = prompt('What is your name?');
alert('Hello ' + name );
name = name.toLowerCase();
//console.log(Name);
document.write('Greetings ' + name + ', Answer a few yes or no questions about me');

//Ask Several Questions
// Question 1. 
let user = prompt('Am I over 21 yeas old?');
if (typeof (user) === 'string') {
user = user.toLowerCase();
}
//If no is Incorrect
if (user === 'no') {
alert('Incorrect! I am over 21');
//console.log('Correct, I am over 21!');
} else if (user === 'yes') {
  //   console.log('Correct answer!');
  alert('Correct answer!');
}

// Question 2.
let degree = prompt('Do I have a college degree?');
if (typeof (degree) === 'string') {
degree = degree.toLowerCase();
}
switch (degree) {
  case 'yes':
  alert('Correct, I have a Bachelor\'s Degree!');
  break;
  case 'no':
  alert('Incorrect answer!');
//   console.log('Incorrect answer!');
break;
} 

// Question 3.
    let social = prompt('Have I been a Social Worker?');
    if (typeof (social === 'string')){
      social = user.toLowerCase();
    } // one conditions have to be true
if (social === 'yes'|| social === 'y') {

//In case yes, correct
switch (social) {
  case 'yes':
  alert('Correct, I have a Bachelor\'s Degree!');
  break;

  case 'no':
  alert('Incorrect answer!');
//   console.log('Incorrect answer!');
break;
} 
}

// Question 4.
let dancer = prompt('Can I dance?');
if (typeof (dancer) === 'string'){
dancer = dancer.toLowerCase();
}// one conditions have to be true
if (dancer === 'yes'|| dancer === 'y') {
    //   console.log('Correct, I am a very good dancer!');
    } 
    else if (dancer === 'no' || dancer === 'n') {
//In case yes, correct
switch (dancer) {
  case 'yes':
  alert('Correct, I have a Bachelor\'s Degree!');
  break;

  case 'no':
  alert('Incorrect answer!');
//   console.log('Incorrect answer!');
break;
} 
}

// Question 5.
let startup = prompt('Do I own a tech startup?');
if (typeof (startup) === 'string'){
startup = startup.toLowerCase();
}   
    //In case yes, correct
switch (startup) {
  case 'yes':
  alert('Correct, I own Cuptoopia!!');
  break;

  case 'no':
  alert('Incorrect answer!');
//   console.log('Incorrect answer!');
break;
} 

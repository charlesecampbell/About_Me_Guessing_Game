'use strict';
let name = prompt('What is your name?');
alert('Hello ' + Name );
user = user.toLowerCase();
document.write('Greeting ' + Name + ', Answer a few yes or no questions about me');

//Questions
// 1. If conditional based confirm command
let user = prompt('Am I over 21 yeas old?');
if (typeof (user) === 'string'){
user = user.toLowerCase();
}
// one conditions have to be true
if (user === 'yes'|| user === 'y') {
//   console.log('Correct, I am over 21!');
//In case yes, correct
switch (user) {
  case 'yes':
  alert('Correct, I am over 21!');
// only one of these have to be true
  break;

// only no can be false
  case 'no':
  alert('Incorrect answer!');
//   console.log('Incorrect answer!');
break;
} 

// 2. If conditional based confirm command
let degree = prompt('Do I have a college degree?');
if (typeof (degree) === 'string'){
degree = user.toLowerCase();
}
// one conditions have to be true
if (degree === 'yes'|| degree === 'y') {
    //   console.log('Correct, I have a Bachelor\'s Degree!');
      alert('Correct, I have a Bachelor\'s Degree!');
    } // only one of these have to be true
    else if (degree === 'no' || degree === 'n') {
    //   console.log('Incorrect!');
      alert('Incorrect!');
    } // only no can be false

// 3. If conditional based confirm command
    let social = prompt('Have I been a Social Worker?');
    if (typeof (social === 'string')){
      social = user.toLowerCase();
    } // one conditions have to be true
if (social === 'yes'|| social === 'y') {
    //   console.log('Correct, I have been a Social Worker!');
      alert('Correct, I have been a Social Worker!');
    } // only one of these have to be true
    else if (social === 'no' || social === 'n') {
    //   console.log('Incorrect Answer!');
      alert('Incorrect Answer');
    } // only no can be false

// 4. If conditional based confirm command
let dancer = prompt('Can I dance?');
if (typeof (dancer) === 'string'){
dancer = dancer.toLowerCase();
}// one conditions have to be true
if (dancer === 'yes'|| dancer === 'y') {
    //   console.log('Correct, I am a very good dancer!');
       alert('Correct, I am a very good dancer!');
    } // only one of these have to be true
    else if (dancer === 'no' || dancer === 'n') {
    //   console.log('Incorrect Answer');
        alert('Incorrect Answer');
    } // only no can be false

// 5. If conditional based confirm command
let startup = prompt('Do I own a tech startup?');
if (typeof (startup) === 'string'){
startup = startup.toLowerCase();
}// one conditions have to be true
if (startup === 'yes'|| startup === 'y') {
    //   console.log('Correct, I own Cuptoopia!!');
       alert('Correct, I own Cuptoopia!');
    } // only one of these have to be true
    else if (startup === 'no' || startup === 'n') {
    //   console.log('Incorrect');
        alert('Incorrect!');
    } // only no can be false
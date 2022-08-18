'use strict';//strict syntax

let total = 0;//Statrt correct answers counter

let name = prompt('What is your name?');
alert('Hello ' + name);
name = name.toLowerCase();
//console.log(Name);
document.write('Greetings ' + name + ', Welcome to my webpage. Please answer a few yes or no questions about me.');

function degreeQ(q, a) {
  let response = prompt(q);
  if (response.toLowerCase() === a.toLowerCase()) {
    total++;
    return 'Correct';
  } else {
    return 'Incorrect';
  }
}

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
  total++;
}

let degree = ['Do you have a degree?'];
let answer = ['Yes'];
// Question 2.
for (let i = 0; i < degree.length; i++) {
  alert(degreeQ(degree[i], answer[i]));
}
// let degree = prompt('Do I have a college degree?');
// if (typeof (degree) === 'string') {
// degree = degree.toLowerCase();
// }
// switch (degree) {
//   case 'yes':
//   alert('Correct, I have a Bachelor\'s Degree!');
//   break;
//   case 'no':
//   alert('Incorrect answer!');
// //   console.log('Incorrect answer!');
// break;
// }

// Question 3.
let social = prompt('Have I been a Social Worker?');
if (typeof (social === 'string')) {
  social = user.toLowerCase();
} // one conditions have to be true
if (social === 'yes' || social === 'y') {

  //In case yes, correct
  switch (social) {
    case 'yes':
      alert('Correct, I have a Bachelor\'s Degree!');
      total++;
      break;

    case 'no':
      alert('Incorrect answer!');
      //   console.log('Incorrect answer!');
      break;
  }
}

// Question 4.
let dancer = prompt('Can I dance?');
if (typeof (dancer) === 'string') {
  dancer = dancer.toLowerCase();
}// one conditions have to be true
if (dancer === 'yes' || dancer === 'y') {
  //   console.log('Correct, I am a very good dancer!');
}
else if (dancer === 'no' || dancer === 'n') {
  //In case yes, correct
  switch (dancer) {
    case 'yes':
      alert('Correct, I have a Bachelor\'s Degree!');
      total++;
      break;

    case 'no':
      alert('Incorrect answer!');
      //   console.log('Incorrect answer!');
      break;
  }
}

// Question 5.
let startup = prompt('Do I own a tech startup?');
if (typeof (startup) === 'string') {
  startup = startup.toLowerCase();
}
//In case yes, correct
switch (startup) {
  case 'yes':
    alert('Correct, I own Cuptoopia!!');
    total++;
    break;

  case 'no':
    alert('Incorrect answer!');
    //   console.log('Incorrect answer!');
    break;
}

// Question 6.
// let numberOfGuesses = 6;
let myFavoriteShows = ['StarTrek', 'Gun Smoke', 'Bull', 'All Rise', 'The Virginian', 'Lost In Space'];
for (let i = 0; i < 6; i++) {
  let myFavShowQ = prompt('What is one of my favorite TV Shows?');
  let isFavorite = false;
  for (let j = 0; j < myFavoriteShows.length; j++) {
    if (myFavShowQ.toLowerCase() === myFavoriteShows[j].toLowerCase()) {
      total++;
      alert('Correct!');
      isFavorite = true;
      break;
    }
  }

  if (isFavorite === true) {
    break;
  } else {
    alert('Incorrect');
  }
}
alert('Your score is ' + total + ' out of 7');

// // Question 7.
// let questions = [];
// let responses = [];
// let answers = [];
// let colors = ['5', '6', '8', '10', '11', '13', '20']
// let response = prompt(question[0]);
// response.push(response);
// question; //['How many colors are in a rainbow?'];
// responses; //['5', '6', '8', '10', '11', '13', '20']
// let question = prompt('How many colors are in a rainbow?');
// for(count = 0; count < 7; count++) {
//   document.write('Current Count : ' + count );
//   document.write('All attempts have be exhausted. The correct answers are 5, 6, 8, 10, 11, 13, 20');
// }






// function randomAdd()
// {
//   let x=document.getElementById('Score');
//   x.value=Math.floor((Math.random()*6)+1);

//   let y=document.getElementById('Score2');
//   y.value=Math.floor((Math.random()*6)+1);
// }

// function checkAdd()
// {
//   var z=document.getElementById('Score2');
//   z.value= parseInt(document.getElementById('Score').value) + parseInt(document.getElementById('Score2').value);


//   if(parseInt(document.getElementById('Score').value)==z.value)
//   {
//     score=score+1;
//     alert('Number of Correct Answers');
//   }
// }
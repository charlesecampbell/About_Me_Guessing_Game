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
let myFavoriteShows = ['StarTrek', 'Gun Smoke', 'Bull', 'All Rise', 'The Virginian', 'Lost In Space'];
for (let i = 0; i < 4; i++) {
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

// Question 7.
let numberOfGuess = 6;
let myFavoriteSongs = ['Shape of You', 'The Weeknd', 'Dance Monkey', 'rockstar', 'Someone You Loved','One Dance'];
let userSongsGuess = prompt('What is one of my favorite Songs');
let isFavorite = fasle;
while(numberOfGuesses > 0) {
  //iterate myFavooriteSong to see if userSongsGuess is inside, if it is set is favorite to true
if (isFavorite === false) {
  alert("Incorrect Song! ");
}
if (isFavorite === true) {
  alert('Correct! You got it! My Favorite Songs are ' + myFavoriteSong + '.  You got a total of ' + correctAnswer + 'point. ');
  total++;
  break;
}
numberOfGuesses -= 1;
break;
}
numberOfGuesses -= 1;
if(numberOfGuesses === 0) {
  alert('You ran out of attempts, sorry! The correct answer is one of the following ' +myFavoriteSong + '! You got a total of ' + correctAnswers + ' points.');
}
userSongGuess = prompt('What is one of my favloite Songs?');

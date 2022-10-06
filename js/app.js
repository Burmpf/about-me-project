'use strict';

console.log('Hello World');
let score = 0;

let answerPls = 'Do you hate me? Is that what it is? So rude!';

let userName = prompt('What is your name?');
console.log(userName);
alert('Welcome to my site ' + userName + '!');


alert('Lets play a game');

function question1(){
  let haveCat = prompt('Do you think I have a cat? (yes/no)').toLowerCase();
  if (haveCat === 'yes' || haveCat === 'y') {
    score++;
    alert('You are right! I love my cats (I have 2)');
  } else if (haveCat === 'no' || haveCat === 'n') {
    alert('WRONG! I love cats. I have 2!');
  } else {
    alert(answerPls);
  }
}
question1();

function question2(){
  let amMarried = prompt('Do you think I\'m married? (yes/no)').toLowerCase();
  if (amMarried === 'yes' || amMarried === 'y') {
    score++;
    alert('Yes I am married!');
  }
  else if (amMarried === 'no' || amMarried === 'n') {
    alert('I am married! Stay away for both of our sakes!');
  }
  else {
    alert(answerPls);
  }
}
question2();


function question3(){
  let haveKid = prompt('Do you think I have a kid? (yes/no)').toLowerCase();
  if (haveKid === 'yes' || haveKid === 'y') {
    score ++;
    alert('I do have a daughter! shes 9 months old!');
  }
  else if (haveKid === 'no' || haveKid === 'n') {
    alert('WRONG! I do have a daughter! Shes 9 months old!');
  }
  else {
    alert(answerPls);
  }
}
question3();


function question4(){
  let howOld = prompt('Do you think I\'m 23 years old? (yes/no)').toLowerCase();
  if (howOld === 'yes' || howOld === 'y') {
    score ++;
    alert(' You\'re right!');
  }
  else if (howOld === 'no' || howOld === 'n') {
    alert('wrong! I\'m actually 23!');
  }
  else {
    alert(answerPls);
  }
}
question4();

function question5(){
  let favColor = prompt('Do you think my fav color is blue? (yes/no)').toLowerCase();
  if (favColor === 'yes' || favColor === 'y') {
    score++;
    alert('Well you\'d be correct! I love it!');
  }
  else if (favColor === 'no' || favColor === 'n') {
    alert('Well thats where youre wrong bucko!');
  }
  else{
    alert(answerPls);
  }
}
question5();

//guess number game

let favNumber = '11';

let attemptsRemain = 4;

function question6(){
  while (attemptsRemain > 0){
    let userAnswer = prompt('what is my favorite number? (1-20)');

    if (userAnswer > favNumber) {
      attemptsRemain--;
      alert(`Your guess is too high! You have ${attemptsRemain} remaining`);
    }

    else if (userAnswer < favNumber) {
      attemptsRemain--;
      alert(`Your number is too low! You have ${attemptsRemain} remaining`);
    }

    else if (userAnswer === favNumber) {
      score ++;
      alert('You\'re right! Good guess!');
      break;
    }
    else if (attemptsRemain === 0){
      alert('I gave you so many chances! The right answer was 11!');
      break;
    }
  }
}
question6();

let attempts = 6;

function question7(){
  const answers = ['chocolate' , 'vanilla',];
  console.log(answers[0,1]);
  while (attempts > 0){
    let userResponse = prompt('What is the best flavor of ice cream?');
    if (userResponse !== answers[0,1]){
      attempts--;
      alert(`How do you even mess this up? ${attempts} attempts remaining.`);
    }
    else if (userResponse === answers[0,1]){
      score ++;
      alert('congrats! It wasnt so hard see?');
      break;
    }
  }
  alert('the only answers were chocolate and vanilla!');
}
question7();

alert('total score:' + score);
alert('Thank you for participating in my quiz ' + userName + '!');

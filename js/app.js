'use strict';

console.log('Hello World');

let answerPls = 'Do you hate me? Is that what it is? So rude!';

let userName = prompt('What is your name?');
console.log(userName);
alert('Welcome to my site ' + userName + '!');


alert('Lets play a game');


let haveCat = prompt('Do you think I have a cat? (yes/no)').toLowerCase();
if (haveCat === 'yes' || haveCat === 'y') {
  alert('You are right! I love my cats (I have 2)');
} else if (haveCat === 'no' || haveCat === 'n') {
  alert('WRONG! I love cats. I have 2!');
} else {
  alert(answerPls);
}



let amMarried = prompt('Do you think I\'m married? (yes/no)').toLowerCase();
if (amMarried === 'yes' || amMarried === 'y') {
  alert('Yes I am married!');
}
else if (amMarried === 'no' || amMarried === 'n') {
  alert('I am married! Stay away for both of our sakes!');
}
else {
  alert(answerPls);
}



let haveKid = prompt('Do you think I have a kid? (yes/no)').toLowerCase();

if (haveKid === 'yes' || haveKid === 'y') {
  alert('I do have a daughter! shes 9 months old!');
}
else if (haveKid === 'no' || haveKid === 'n') {
  alert('WRONG! I do have a daughter! Shes 9 months old!');
}
else {
  alert(answerPls);
}


let howOld = prompt('Do you think I\'m 23 years old? (yes/no)').toLowerCase();

if (howOld === 'yes' || howOld === 'y') {
  alert(' You\'re right!');
}
else if (howOld === 'no' || howOld === 'n') {
  alert('wrong! I\'m actually 23!');
}
else {
  alert(answerPls);
}


let favColor = prompt('Do you think my fav color is blue? (yes/no)').toLowerCase();

if (favColor === 'yes' || favColor === 'y') {
  alert('Well you\'d be correct! I love it!');
} 
else if (favColor === 'no' || favColor === 'n') {
  alert('Well thats where youre wrong bucko!');
} 
else{
  alert(answerPls);
}

alert('Thank you for participating in my quiz ' + userName + '!');








//let likesStarWars = prompt('Do I like Star Wars?').toLowerCase();
//  console.log(likesStarWars);
//  likesStarWars = likesStarWars.toLowerCase();
//  console.log(likesStarWars);

// if (likesStarWars === 'yes' || likesStarWars === 'y') {
//   console.log('You are correct. I do like Star Wars');
// } else if (likesStarWars === 'no' || likesStarWars === 'n') {
//   console.log('That is incorrect. I do like Star Wars');
// } else {
//   console.log('You need to answer with a Yes or a No');
// }


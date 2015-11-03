var no =0;
var yes =0;
var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');

 var question1 = prompt('Have I lived in Washington my whole life?').toLowerCase();

function q1() {
if (question1 === 'yes' || question1 === 'y' || question1 === 'ye' || question1 === 'Yeah' || question1 ==='yea') {
  ans1.innerHTML = 'You got it! I have lived in Mill Creek, Woodinville, and Bellevue! </br><img src= "images/home.jpg">';
  ans1.className = 'correct';
  console.log('The user answered correct with: ' + question1);
  yes +=1;
} else {
  ans1.innerHTML = 'Uh oh! That is wrong';
  ans1.className = 'wrong';
  console.log('The user answered incorrect with: ' + question1);
  }
}

 var question2 = prompt('Is my favorite color yellow?').toLowerCase();

function q2() {
if (question2 === 'no' || question2 === 'n' || question2 === 'NO') {
  ans2.innerHTML = 'You got it! Blue is my favorite color. </br><img src="images/smurf.jpg">';
  ans2.className = 'correct';
  console.log('The user answered correct with: ' + question2);
  yes +=1;
} else {
  ans2.innerHTML = 'Uh oh! That is wrong';
  ans2.className = 'wrong';
  console.log('The user answered incorrect with: ' + question2);
  }
}

 var question3 = prompt('Is my favorite instrument the guitar?').toLowerCase();

function q3() {
if (question3 === 'yes' || question3 ==='ye' || question3 ==='y' || question3 ==='yeah' || question3 ==='yea') {
  ans3.innerHTML = 'You got it! The guitar is my favorite instrument. </br><img src="images/guitar.jpg">';
  ans3.className = 'correct';
  console.log('The user answered correct with: ' + question3);
  yes +=1;
} else {
  ans3.innerHTML + 'Uh oh! That is wrong';
  ans3.className = 'wrong';
  console.log('The user answered incorrect with: ' + question3);
  }
}

var question4 = parseInt(prompt('How old am I?'));

function q4() {
  console.log("This is the user's answer");
  console.log(typeof(question4));
  console.log("This what we are validating");
  console.log(typeof(22))
if (question4 === 22) {
  ans4.innerHTML = 'Great guess! I am 22. </br><img src="images/claptrap.gif">';
  ans4.className = 'correct';
  console.log('The User answered correct with: ' + question4);
  yes +=1;
} else if(question4 < 22) {
  ans4.innerHTML = 'You were close, but not quite there!';
  ans4.className = 'wrong';
  console.log('The User answered incorrect with: ' + question4);
} else {
  ans4.innerHTML = 'You were close, better luck next time!';
  ans4.className = 'wrong';
  console.log('The User answered incorrect with: ' + question4);
  }
}


var question5 = prompt("Am I a big video gamer?").toLowerCase();

function q5() {
if (question5 === 'yes' || question5 ==='ye' || question5 ==='y' || question5 ==='yeah' || question5 ==='yea') {
  ans5.innerHTML = 'You got it! Some of my favorites are HALO, Mass Effect, and Star Wars. </br><img src="images/vader.jpg">';
  ans5.className = 'correct';
  console.log('The user answered correct with: ' + question5);
  yes +=1;
} else {
  ans5.innerHTML + 'Hmmm...that is not the correct answer, maybe next time!';
  ans5.className = 'wrong';
  console.log('The User answered incorrect with: ' + question5);
  }
}

var triesRemaining = 3;

var question6 = parseInt(prompt("How many guitars do I have?"));

function q6() {
  while (question6 !==5) {
    ans6.innerHTML = "That's not quite the right guess. Give it another guess!";
    question6 = parseInt(prompt('What is your guess? It\'s between 1 and 10.'));
    ans1.className = 'correct';
    console.log(question6)
  }
  if (question6 ===5) {
    ans6.innerHTML = 'Way to go! I do have 5. </br><img src="images/torgue.gif">';
    ans6.className = 'correct';
    console.log('The user answered correct with: ' + question6);
    yes +=1;
  }
}

window.setTimeout(q1, 1000);
window.setTimeout(q2, 1000);
window.setTimeout(q3, 1000);
window.setTimeout(q4, 1000);
window.setTimeout(q5, 1000);
window.setTimeout(q6, 1000);

  alert('You got ' + yes + ' out of 6 questions correct! Good job!');




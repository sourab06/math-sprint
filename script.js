// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');

const input_value10=document.getElementById('value-10');
const input_value25=document.getElementById('value-25');
const input_value50=document.getElementById('value-50');
const input_value99=document.getElementById('value-99');
// const start=document.getElementsByClassName('start')[0];
// Countdown Page
// const countdown = document.querySelector('.countdown');
const countdownclass= document.getElementsByClassName('countdown')[0];
// Game Page
const itemContainer = document.querySelector('.item-container');
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// Equations
var questionamount;
var i=3;
let equationsArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Time

// Scroll

// Create Correct/Incorrect Random Equations
function createEquations() {
  // Randomly choose how many correct equations there should be
  // const correctEquations = 
  // Set amount of wrong equations
  // const wrongEquations = 
  // Loop through, multiply random numbers up to 9, push to array
  // for (let i = 0; i < correctEquations; i++) {
  //   firstNumber = 
  //   secondNumber = 
  //   const equationValue = firstNumber * secondNumber;
  //   const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
  //   equationObject = { value: equation, evaluated: 'true' };
  //   equationsArray.push(equationObject);
  // }
  // Loop through, mess with the equation results, push to array
  // for (let i = 0; i < wrongEquations; i++) {
  //   firstNumber = 
  //   secondNumber = 
  //   const equationValue = firstNumber * secondNumber;
  //   wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
  //   wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
  //   wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
  //   const formatChoice = 
  //   const equation = wrongFormat[formatChoice];
  //   equationObject = { value: equation, evaluated: 'false' };
  //   equationsArray.push(equationObject);
  // }
}

// Dynamically adding correct/incorrect equations
// function populateGamePage() {
//   // Reset DOM, Set Blank Space Above
//   itemContainer.textContent = '';
//   // Spacer
//   const topSpacer = document.createElement('div');
//   topSpacer.classList.add('height-240');
//   // Selected Item
//   const selectedItem = document.createElement('div');
//   selectedItem.classList.add('selected-item');
//   // Append
//   itemContainer.append(topSpacer, selectedItem);

//   // Create Equations, Build Elements in DOM

//   // Set Blank Space Below
//   const bottomSpacer = document.createElement('div');
//   bottomSpacer.classList.add('height-500');
//   itemContainer.appendChild(bottomSpacer);
// }

input_value10.addEventListener('click',()=>{
    input_value10.parentNode.classList.add('selected-label');
    input_value25.parentNode.classList.remove('selected-label');
    input_value50.parentNode.classList.remove('selected-label');
    input_value99.parentNode.classList.remove('selected-label');
    questionamount=10;
    
});
    
input_value25.addEventListener('click',()=>{
    input_value25.parentNode.classList.add('selected-label');
    input_value10.parentNode.classList.remove('selected-label');
    input_value50.parentNode.classList.remove('selected-label');
    input_value99.parentNode.classList.remove('selected-label');
    questionamount=25;
   
});
input_value50.addEventListener('click',()=>{
    input_value50.parentNode.classList.add('selected-label');
    input_value10.parentNode.classList.remove('selected-label');
    input_value25.parentNode.classList.remove('selected-label');
    input_value99.parentNode.classList.remove('selected-label');
    questionamount=50;
    
});
input_value99.addEventListener('click',()=>{
    input_value99.parentNode.classList.add('selected-label');
    input_value10.parentNode.classList.remove('selected-label');
    input_value25.parentNode.classList.remove('selected-label');
    input_value50.parentNode.classList.remove('selected-label');
    questionamount=99;
    
    
});
function countdownstart(){
    
}
function countdown(e){
    splashPage.hidden=true;
    countdownPage.hidden=false;
    e.preventDefault();
    console.log('yes');
    console.log(e);
   
   setInterval(()=>{
    countdownclass.innerHTML=i;
        i--;
   },1000);
        
    
}
   


startForm.addEventListener('submit',countdown);



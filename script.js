// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
// const bestScores = document.querySelectorAll('.best-score-value');

const input_value10=document.getElementById('value-10');
const input_value25=document.getElementById('value-25');
const input_value50=document.getElementById('value-50');
const input_value99=document.getElementById('value-99');
// const start=document.getElementsByClassName('start')[0];
// Countdown Page
// const countdown = document.querySelector('.countdown');
const countdownclass= document.getElementsByClassName('countdown')[0];
// Game Page
const itemContainer = document.getElementsByClassName('item-container')[0];
// Score Page
const finalTimeEl = document.getElementsByClassName('final-time')[0];
const baseTimeEl = document.getElementsByClassName('base-time')[0];
const penaltyTimeEl = document.getElementsByClassName('penalty-time')[0];
const playAgainBtn = document.getElementsByClassName('play-again')[0];

// Equations
var questionamount;
var i=3;
var equationsArray = [];

var ourarray =['10','25','50','99'];

// Game Page
var firstNumber = 0;
var secondNumber = 0;
//Time
var timer;
var timeplayed=0;
var basetime=0;
var penaltytime=0;
var bestime={};
var previoustime;

var bestscore;


var equationObject = {};
const wrongFormat = [];
const userselectedvalues=[];
var a=0;
var valueY =0;

function startTimer(){
    
    // console.log('hi');
    timer=setInterval(()=>{
        timeplayed=timeplayed+0.10;
    },100);
   
    }


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
    // setInterval(()=>{
        i=3;
        countdownclass.innerHTML=i;
            i--;
            setTimeout(()=>{ countdownclass.innerHTML=i;
                i--;},1000);
            setTimeout(()=>{ countdownclass.innerHTML=i;
                i--;},2000);
            setTimeout(()=>{ countdownclass.innerHTML='Go!';
                },3000);
                setTimeout(()=>{ 
                    showgamepage();
                },4000);
                // showgamepage();
                
//        },1000);
}
function countdown(e){
    
    if( questionamount== 0){
        alert('Please select number of  questions');
       
    }
    else{

    
    splashPage.hidden=true;
    countdownPage.hidden=false;
    input_value99.parentNode.classList.remove('selected-label');
    input_value10.parentNode.classList.remove('selected-label');
    input_value25.parentNode.classList.remove('selected-label');
    input_value50.parentNode.classList.remove('selected-label');
    e.preventDefault();
    // console.log('yes');
    // console.log(e);
   
    createEquations();
    // console.log(valueY);
    // console.log(a);
    // console.log(questionamount);
    countdownstart();
         
    } 
}
function showgamepage(){
     countdownPage.hidden=true;
    gamePage.hidden=false;
   
    timeplayed=0;
    itemContainer.scroll(0,0);
    a=0; //'a' counts total number of times right or wrong is pressed
    startTimer();
   
    var topdiv =document.createElement('div');
    topdiv.classList.add('height-240');
    itemContainer.appendChild(topdiv);
   
   

    for(j=0;j<questionamount;j++){
        var newdiv=document.createElement('div');
        newdiv.classList.add('item');

        var newh1=document.createElement('h1');
        newh1.innerHTML=equationsArray[j].value;

        newdiv.appendChild(newh1);
        itemContainer.appendChild(newdiv);
    }
    
    var bottomdiv =document.createElement('div');
    bottomdiv.classList.add('height-500');
    itemContainer.appendChild(bottomdiv);
   
   
}
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function createEquations() {
    var correctEquations;
    var correctanswer=0;
    var no_of_correctequations=getRandomInt(questionamount+1);
    var no_of_wrongequation= questionamount - no_of_correctequations;
    for(j=0; j<no_of_correctequations;j++){
        firstNumber=getRandomInt(13);
        secondNumber =getRandomInt(13);
        correctanswer=firstNumber*secondNumber;
        correctEquations=`${firstNumber} X ${secondNumber} = ${correctanswer}`;
        equationObject={value:correctEquations,evaluated:'true'};
        equationsArray.push(equationObject);
         }
    for(j=0;j<no_of_wrongequation;j++){
        firstNumber=getRandomInt(13);
        secondNumber =getRandomInt(13);
        correctanswer=firstNumber*secondNumber;
        wrongFormat[0]=`${firstNumber+1} X ${secondNumber} = ${correctanswer}`;
        wrongFormat[1]=`${firstNumber} X ${secondNumber+1} = ${correctanswer}`;
        wrongFormat[2]=`${firstNumber} X ${secondNumber} = ${correctanswer-1}`;
        equationObject={value:wrongFormat[getRandomInt(3)],evaluated:'false'};
        equationsArray.push(equationObject);
    }
    shuffle(equationsArray);
    // console.log(equationsArray);
}  
  function selected(value){
    
    valueY+=80;
    itemContainer.scroll(0,valueY);
    userselectedvalues[a]=value;
    // console.log(userselectedvalues[a]);
    if(a == (questionamount-1)){
        gamePage.hidden=true;
        scorePage.hidden=false;
        valueY=0;
        a=0;
        clearInterval(timer);
        calculatetime();
        
        
    }
    a++;

  } 
  function calculatetime(){
    for(b=0;b< questionamount-1 ;b++){
        if(userselectedvalues[b] != equationsArray[b]){
            penaltytime=penaltytime+0.1;
        }
    }
    // console.log(valueY);
    // console.log(a);
    // console.log(questionamount);
    basetime=timeplayed-penaltytime;
    //add time to UI
    finalTimeEl.textContent=`${Math.round(100*timeplayed)/100}s`;
    baseTimeEl.textContent=`Base Time:${Math.round(100*basetime)/100}s`;
    penaltyTimeEl.textContent=`Penalty:+ ${Math.round(100*penaltytime)/100}s`;
    //clear out game page for next iteration
    itemContainer.innerHTML='';
    const newdiv1 = document.createElement('div');
    newdiv1.classList.add('selected-item');
    itemContainer.appendChild(newdiv1);
    itemContainer.scroll(0,0);

    best_time();
}
   function setlocalstorage(){ 
    //best time
    if (JSON.parse(localStorage.getItem(localStorage.key(''))) === null) {
       
        localStorage.setItem('10',JSON.stringify({questions:10,best_time:0.0}));
        localStorage.setItem('25',JSON.stringify({questions:25,best_time:0.0}));
        localStorage.setItem('50',JSON.stringify({questions:50,best_time:0.0}));
        localStorage.setItem('99',JSON.stringify({questions:99,best_time:0.0}));
        

    }
    else{
        for(c=0;c<4;c++){
        previoustime= JSON.parse(localStorage.getItem(ourarray[c]));
        previoustime.best_time=Math.round(100*previoustime.best_time)/100;
        document.getElementById(`value-${ourarray[c]}`).nextSibling.nextSibling.innerHTML=`best score:<br>${previoustime.best_time}`;
           
        }

    }
}
    function best_time(){
    bestime={
        questions:questionamount,
        best_time:basetime,
    }
    previoustime= JSON.parse(localStorage.getItem(`${bestime.questions}`));
    // console.log(previoustime.best_time);
    if( previoustime.best_time > basetime || previoustime.best_time==0){
    bestime={
        questions:questionamount,
        best_time:basetime,
    }
    localStorage.setItem(`${bestime.questions}`,JSON.stringify(bestime));
    bestscore=Math.round(100*basetime)/100;
    document.getElementById(`value-${questionamount}`).nextSibling.nextSibling.innerHTML=`best score:<br>${bestscore}`;
    
    
    }
    
    // console.log(document.getElementById(`value-${questionamount}`));
    // console.log();
    // else{
    // document.getElementById(`value-${questionamount}`).nextSibling.lastChild.innerHTML=previoustime.best_time; 
    // }
  }

  function restartproject(){
    scorePage.hidden=true;
    splashPage.hidden=false;
    questionamount=0;
  }
  
startForm.addEventListener('submit',countdown);
playAgainBtn.addEventListener('click',restartproject);
setlocalstorage();

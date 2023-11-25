# Projects related to Dom

## Solution code

## Project 1

```JavaScript
console.log("Denny")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});



```


## Project 2  Solution

```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});




```
## project 4 guss the num

```javascript
let RandomNum = parseInt(Math.random() * 100 + 1);

const SubValue = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const gussValue = document.querySelector('.guesses');
const remaing = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuss = [];

let numGuss = 1;

let playGame = true;

if (playGame) {
  SubValue.addEventListener('click', function (e) {
    e.preventDefault();
    const guss = parseInt(UserInput.value);
    console.log(guss);
    validateGuss(guss);
  });
}

function validateGuss(guss) {
  // vaild num
  if (isNaN(guss)) {
    alert('please enter valid num');
  } else if (guss < 1) {
    alert('please enter more 1 ');
  } else if (guss > 100) {
    alert('please enter less then 100');
  } else {
    prevGuss.push(guss);
    if (numGuss === 11) {
      DisplayGuss(guss);
      DisplayMgs(`Game Over. random number was ${RandomNum}`);
      endGame();
    } else {
      DisplayGuss(guss);
      CheckGuss(guss);
    }
  }
}
function CheckGuss(guss) {
  // random num ke eqval h ya nhi

  if (guss === RandomNum) {
    DisplayMgs('you gussed it right');
    endGame();
  } else if (guss < RandomNum) {
    DisplayMgs('number is too low');
  } else if (guss > RandomNum) {
    DisplayMgs('number is too high');
  }
}
function DisplayGuss(guss) {
  // val clean , guss update
  UserInput.value = '';
  gussValue.innerHTML += `${guss}, `;
  numGuss++;
  remaing.innerHTML = `${11 - numGuss}`;
}
function DisplayMgs(message) {
  // mgs pass
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(message) {
  // mgs pass
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(message) {
  // mgs pass
  const newGbutt = document.querySelector('#newGame');
  newGbutt.addEventListener('click', function (e) {
    RandomNum = parseInt(Math.random() * 100 + 1);
    prevGuss = [];
    numGuss = 1;
    gussValue.innerHTML = '';
    remaing.innerHTML = `${11 - numGuss}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```



## project 5 unlimited color

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId
const startCl =function(){
  if(!intervalId){
  intervalId = setInterval(cahngBg,1000)
  }
  
  function cahngBg(){
    document.body.style.backgroundColor = randomColor()
  }
}
const stopCl =function(){
  clearInterval(intervalId)
  intervalId = null;

}

document.querySelector("#start").addEventListener('click',startCl)

document.querySelector("#stop").addEventListener('click',stopCl)





```




```

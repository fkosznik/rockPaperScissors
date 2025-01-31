const win = document.querySelector('#win');
let scoreValue = document.querySelector('#score');
score = 0;
scoreValue.textContent = score;

function run1() {
  document.querySelector('#output').style.display = 'inline-block';
  let number = Math.floor(Math.random() * 3);
  console.log(number);
  if (number === 2) {
    document.querySelector('#output').textContent = 'rock';
    document.querySelector('#img1').src = './img/img1.jpg';
    win.textContent = 'Draw';
  } else if (number === 1) {
    document.querySelector('#output').textContent = 'paper';
    document.querySelector('#img1').src = './img/img2.jpeg';
    win.textContent = 'You lost';
    score -= 1;
    scoreValue.textContent = score;
  } else {
    document.querySelector('#output').textContent = 'scissors';
    document.querySelector('#img1').src = './img/img3.jpeg';
    win.textContent = 'You won!';
    score += 1;
    scoreValue.textContent = score;
  }
}
function run2() {
  document.querySelector('#output').style.display = 'inline-block';
  let number = Math.floor(Math.random() * 3);
  console.log(number);
  if (number === 2) {
    document.querySelector('#output').textContent = 'rock';
    document.querySelector('#img1').src = './img/img1.jpg';
    win.textContent = 'You won!';
    score += 1;
    scoreValue.textContent = score;
  } else if (number === 1) {
    document.querySelector('#output').textContent = 'paper';
    document.querySelector('#img1').src = './img/img2.jpeg';
    win.textContent = 'Draw';
  } else {
    document.querySelector('#output').textContent = 'scissors';
    document.querySelector('#img1').src = './img/img3.jpeg';
    win.textContent = 'You lost!';
    score -= 1;
    scoreValue.textContent = score;
  }
}
function run3() {
  document.querySelector('#output').style.display = 'inline-block';
  let number = Math.floor(Math.random() * 3);
  console.log(number);
  if (number === 2) {
    document.querySelector('#output').textContent = 'rock';
    document.querySelector('#img1').src = './img/img1.jpg';
    win.textContent = 'You lost';
    score -= 1;
    scoreValue.textContent = score;
  } else if (number === 1) {
    document.querySelector('#output').textContent = 'paper';
    document.querySelector('#img1').src = './img/img2.jpeg';
    win.textContent = 'You won';
    score += 1;
    scoreValue.textContent = score;
  } else {
    document.querySelector('#output').textContent = 'scissors';
    document.querySelector('#img1').src = './img/img3.jpeg';
    win.textContent = 'Draw!';
  }
}

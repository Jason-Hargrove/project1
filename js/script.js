
// ========== console log everyting =========

let log = console.log


// ========== dom nodes ==========
const firstChild = document.querySelector('.first-child');
const secondChild = document.querySelector('.second-child');
const thirdChild = document.querySelector('.third-child');



// const thePlayer = {
//   items: []
// }

// if title = someting ===>
// changes: button, dose, etc.
const turnThePage = () => {
  // render the page
}

const updateButtons = () => {


}

// ========== classes ==========

class Character {
  constructor(name, exposure) {
    this.name = name;
    this.exposure = exposure;
  }
  pickUp(){

  }
}

const player = new Character('Player', 10);

const pen = new Character('Pen', 11);
const adjustableWrench = new Character('Wrench', 12);
const paper = new Character('Paper', 13);


// ========== pages ==========

// start - page 1
const startGame = () => {

  // title
  firstChild.innerHTML = '<h1>Accumulative Dose</h1>';

  // bottle
  secondChild.innerHTML = '<p>Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. </p>';

  // start button
  const newButton = document.createElement('button');

  newButton.classList.add('start-button');

  newButton.innerHTML = 'Start the Game';

  thirdChild.appendChild(newButton);
  // end start button
}

// ========== on load ==========
window.onload = startGame();

const startButton = document.querySelector(".start-button");

// ========== event listiners ==========
startButton.addEventListener('click', function(evt) {
  log(evt);
});

// ....not going to use overlay. use to toggl off initial page.
// openButton.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });

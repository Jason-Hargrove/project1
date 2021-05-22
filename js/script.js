// ========== console log everyting =========
let log = console.log

// ========== dom nodes ==========
// start page
const startGridContainer = document.querySelector('.start-grid-container');
const startFirstChild = document.querySelector('.start-first-child');
const startSecondChild = document.querySelector('.start-second-child');
const startThirdChild = document.querySelector('.start-third-child');

// all the other pages
const pageGridContainer = document.querySelector('.page-grid-container');
const firstPageChild = document.querySelector('.first-page-child');
const secondPageChild = document.querySelector('.second-page-child');
const thirdPageChild = document.querySelector('.third-page-child');

// death page. same format as the start page.
const deathGridContainer = document.querySelector('.death-gird-container');
const firstDeathChild = document.querySelector('.first-death-child');
const secondDeathChild = document.querySelector('.second-death-child');
const thirddDeathChild = document.querySelector('.third-death-child');

// ========== global fuinctions ==========
// increases dose randomly on page
const randomDose = () => {

}

// may use
const turnThePage = () => {
  // render the page
}

// may use
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
  useItem() {

  }
}

// ========== instantiate classes ==========
const player = new Character('Player', 10);

const pen = new Character('Pen', 11);
const adjustableWrench = new Character('Wrench', 12);
const paper = new Character('Paper', 13);
const brokenPipe = new Character('Broken Pipe', 14);


// ========== pages ==========
// game start
const startGame = () => {

  // title
  startFirstChild.innerHTML = '<h1>Accumulative Dose</h1>';

  // bottle
  startSecondChild.innerHTML = '<p>Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. </p>';

  // start button
  const newButton = document.createElement('button');

  newButton.classList.add('start-button');

  newButton.innerHTML = 'Start the Game';

  startThirdChild.appendChild(newButton);
  // end start button
}

// specific pages start here
const firstPage = () => {
  startGridContainer.classList.replace('start-grid-container', 'page-grid-container')


}

const secondPage = () => {


}

const thirdPage = () => {


}

const death = () => {


}

// ========== on load ==========
window.onload = startGame();

const startButton = document.querySelector(".start-button");

// ========== event listiners ==========
startButton.addEventListener('click', firstPage);

// ....not going to use overlay. use to toggl off initial page.
// openButton.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });

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



// death page. same format as the start page.
const deathGridContainer = document.querySelector('.death-gird-container');
const firstDeathChild = document.querySelector('.first-death-child');
const secondDeathChild = document.querySelector('.second-death-child');
const thirddDeathChild = document.querySelector('.third-death-child');

// ========== global fuinctions ==========
// replaces class
const replaceClass = (selector, old, updated) => {
    selector.classList.replace(old, updated);
}


// makes the big text box and places text into it
const fourthChildDiv = (text) => {
  const createDiv = document.createElement('div');
  createDiv.classList.add('fourth-page-child');
  createDiv.innerHTML = text;
  startGridContainer.appendChild(createDiv);
}



// makes a left button
const createLeftButton = () => {
  const thirdPageChild = document.querySelector('.third-page-child');
  const leftButton = document.createElement('button');
  leftButton.classList.add('left-button');
  leftButton.innerHTML = 'Go Left';
  thirdPageChild.appendChild(leftButton);
}





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
  constructor(name, uptake) {
    this.name = name;
    this.uptake = uptake;
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


// ==================== pages ====================

// ===== game start ======
const startGame = () => {

  // title
  startFirstChild.innerHTML = '<h1>Accumulative Dose</h1>';

  // bottle
  startSecondChild.innerHTML = '<p>Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.</p>';

  // start button
  const newButton = document.createElement('button');
  newButton.classList.add('start-button');
  newButton.innerHTML = 'Start the Game';
  startThirdChild.appendChild(newButton);
  // end start button
}

// ===== page 1 =====
// specific pages start here
const firstPage = () => {
  // replace grid container
  replaceClass(startGridContainer, 'start-grid-container', 'page-grid-container');

  // replace first child - dose meter
  replaceClass(startFirstChild, 'start-first-child', 'first-page-child');

  // replace Second - text?
  replaceClass(startSecondChild, 'start-second-child', 'second-page-child');

  // replace third
  replaceClass(startThirdChild, 'start-third-child', 'third-page-child');

  // content - first - dose rate
  const firstPageChild = document.querySelector('.first-page-child');
  firstPageChild.innerHTML = `DOSE ${player.uptake}`;

  // content - second - text
  const secondPageChild = document.querySelector('.second-page-child');
  secondPageChild.innerHTML = `Hi.You see a ${pen.name}`;

  // content - third - item list
  const thirdPageChild = document.querySelector('.third-page-child');

  // removes the start button
  startButton.remove();

  // create - left button on third page child.
  createLeftButton();

  // create a fourth div - big text.
  fourthChildDiv('Hi. I\'m text. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices.');




// so...crate two more buttons. remove the start button - maybe do that first.
// repalce the text.
// make an items menu.


}

const secondPage = () => {


}

const thirdPage = () => {


}

const death = () => {


}

// ========== on load ==========
startGame();

const startButton = document.querySelector(".start-button");

// ========== event listiners ==========
startButton.addEventListener('click', firstPage);

// ========== console log everyting =========

let log = console.log;


// ========== dom nodes ==========

//pages
const startPage = document.querySelector('div#start-page');
const pageOne = document.querySelector('div#page-one');
const first = document.querySelectorAll('div.first');
const second = document.querySelectorAll('div.second');
const third = document.querySelectorAll('div.third');



// ========== start page ==========
// generate start button
const makeStartButton = () => {
  const newButton = document.createElement('button');
  newButton.classList.add('start-button');
  newButton.innerHTML = 'Start the Game';
  third[0].appendChild(newButton);
}
makeStartButton();



// // flex container
// const flexContainer = document.querySelector('body > div#modal > .flex-container');
//
// // left column
// const leftColumn = document.querySelector('body > div#modal > div.flex-container > div.left-column');
// const firstDiv = document.querySelector('div.first');
// const secondDiv = document.querySelector('div.second');
// const thirdDiv = document.querySelector('div.third');
//
// // rigth column
// const rightColumn = document.querySelector('body > div#modal > div.flex-container > div.right-column');
// const fourthDiv = document.querySelector('div.fourth');
// const fifthDiv = document.querySelector('div.fifth');
// const sixthDiv = document.querySelector('div.sixth');
//
//
// ========== global fuinctions ==========
//
// // replaces class
// const replaceClass = (selector, old, updated) => {
//     selector.classList.replace(old, updated);
// }
//

//
// // generates a left button
// const leftButton = () => {
//   const newButton = document.createElement('button');
//   newButton.classList.add('left-button');
//   newButton.innerHTML = 'Go Left';
//   thirdDiv.appendChild(newButton);
// }
//
// // generates a middle button
// const backButton = () => {
//   const newButton = document.createElement('button');
//   newButton.classList.add('back-button');
//   newButton.innerHTML = 'Go Back';
//   fifthDiv.appendChild(newButton);
// }
//
// // generates a right button
// const rightbutton = () => {
//   const newButton = document.createElement('button');
//   newButton.classList.add('right-button');
//   newButton.innerHTML = 'Go Right';
//   sixthDiv.appendChild(newButton);
// }
//
// // back to start screen - button
//
// // play again - button
//
// // increases dose randomly on page
// // const randomDose = () => {
// //}
//
//
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

const itemList = ['place-holder', 'place-holder2', 'broken-pppp'];

// ========== instantiate classes ==========

const player = new Character('Player', 10);

const pen = new Character('Pen', 11);
const adjustableWrench = new Character('Wrench', 12);
const paper = new Character('Paper', 13);
const brokenPipe = new Character('Broken Pipe', 14);


// // ==================== pages ====================
//
// // ===== start of the game - this function called near the bottom of the document =====
//
// const startGame = () => {
//   // title
//   firstDiv.innerHTML = '<h1>Accumulative Dose</h1>';
//   // large text field
//   secondDiv.innerHTML = '<p>Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive.</p>';
//
//   // start button
//   startButton();
// }
//
// // ===== page 1 =====

const firstPage = () => {

// dosimeter
log(first)
const doseRate = `<center> <h4>DOSE</h4> ${player.uptake} </center>`;
first[1].innerHTML = doseRate;

}




//
// // maybe make a function to poplulate the list
// secondDiv.innerHTML = itemList;
//
// // removes the start button
// startButtonListiner.remove();
//
// // create - left button on third page child.
// leftButton();
//
// // big text
// fourthDiv.innerHTML = '<p>Hi. I\'m text. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices. Survive. Escape if you can! Make the right choices.</p>';
//
// backButton();
//
// rightbutton();
// }


// const death = () => {

// // // ========== on load ==========
// startGame();
//
// ========== event listiners ==========
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', (e) => {
  document.querySelector('#start-page').style.display = 'none';
  document.querySelector('#page-one').style.display = 'flex';
  document.querySelector('.left-column').style.display = 'flex';
  firstPage();
});

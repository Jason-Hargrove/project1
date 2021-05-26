// ========== console log everyting =========

let log = console.log;


// ========== dom nodes ==========

//start page
const startPage = document.querySelector('div#start-page');
const startTitle = document.querySelector('div.title-sector');
const startContent = document.querySelector('div.content-sector');
const startPageButton = document.querySelector('div.button-sector');

// pages
const pageOne = document.querySelector('div#page-one');
const first = document.querySelectorAll('div.first');
const second = document.querySelectorAll('div.second');
const third = document.querySelectorAll('div.third');
const fourth = document.querySelectorAll('div.fourth');
const fifth = document.querySelectorAll('div.fifth');


// ========== global fuinctions ==========
//
// // replaces class
// const replaceClass = (selector, old, updated) => {
//     selector.classList.replace(old, updated);
// }

// generates a left button
const leftButton = (i) => {
  const newButton = document.createElement('button');
  newButton.classList.add('left-button');
  newButton.innerHTML = 'Go Left';
  third[i].appendChild(newButton);
}

// generates a middle button
const backButton = (i) => {
  const newButton = document.createElement('button');
  newButton.classList.add('back-button');
  newButton.innerHTML = 'Go Back';
  fifth[i].appendChild(newButton);
}

// generates a right button
const rightbutton = (i) => {
  const newButton = document.createElement('button');
  newButton.classList.add('right-button');
  newButton.innerHTML = 'Go Right';
  fifth[i].appendChild(newButton);
}

// back to start screen - button

// play again - button

// increases dose randomly on page
// const randomDose = () => {
//}



// ========== start page ==========
// makes the title
const makeTitle = () => {
  const newTitle = document.createElement('h1');
  newTitle.classList.add('title');
  newTitle.innerHTML = 'Accumulative Dose';
  startTitle.appendChild(newTitle);
}
makeTitle();

// content
const makeContent = () => {
  const newContent = document.createElement('p');
  newContent.classList.add('content');
  newContent.innerHTML = 'Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! Escape if you can! ';
  startContent.appendChild(newContent);
}
makeContent();

// generate start button
const makeStartButton = () => {
  const newButton = document.createElement('button');
  newButton.classList.add('start-button');
  newButton.innerHTML = 'Start the Game';
  startPageButton.appendChild(newButton);
}
makeStartButton();
// ========== end start page ==========


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

// ========== array of iems - to be moved to character evntually =========
const itemsList = ['Wrench', 'Pen', 'Broken Pipe', 'Adjustable Wrench', 'Paper'];

// ========== instantiate classes ==========

const player = new Character('Player', 10);

const pen = new Character('Pen', 11);
const adjustableWrench = new Character('Wrench', 12);
const paper = new Character('Paper', 13);
const brokenPipe = new Character('Broken Pipe', 14);


// ==================== pages ====================

// ---------- page 1 ----------

const firstPage = () => {
  // dosimeter
  const doseRate = `<center> <h4>DOSE</h4> ${player.uptake} </center>`;
  first[0].innerHTML = doseRate;

  // generates an unordered list
  const newUl = document.createElement('ul');
  newUl.classList.add('unordered-list');
  second[0].appendChild(newUl);
  // ...dom node
  const unorderedList = document.querySelector('.unordered-list');
  // ...place items in list
  itemsList.forEach(function (item) {
    let li = document.createElement('li');
    li.textContent = item;
    unorderedList.appendChild(li);
  });

  // generates a left button
  leftButton(0);

  // Block of text on page
  const mainText = `<p> Hi. This is the text content on the page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;

  backButton(0);

  rightbutton(0);
}
// ---------- end page 1 ----------

// ---------- page 2 ----------
// ... empty for now

// ========== event listiners ==========
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', (e) => {
  document.querySelector('#start-page').style.display = 'none';
  document.querySelector('#page-one').style.display = 'flex';
  // document.querySelector('.left-column').style.display = 'flex';
  firstPage();
});

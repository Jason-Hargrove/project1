// ========== console log everyting =========

let log = console.log;


// ========== dom nodes ==========

//start page
const startPage = document.querySelector('div#start-page');
const startTitle = document.querySelector('div.title-sector');
const startContent = document.querySelector('div.content-sector');
const startPageButton = document.querySelector('div.button-sector');

// page-one and elements
const pageOne = document.querySelector('div#page-one');
const grabPageClass = document.querySelectorAll('.page-one')
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

  // Block of text on page
  const mainText = `<p> Hi. This is page 1. the text content on the page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;

  // make the buttons
  leftButton(0);

  backButton(0);

  rightbutton(0);

  // ========== event listiners ==========
  const goLeft = document.querySelector('.left-button');
  const goBack = document.querySelector('.back-button');
  const goRight = document.querySelector('.right-button');

  // left button
  goLeft.addEventListener('click', (e) => {
    if (pageOne.classList.contains('page-two')) {
      grabPageClass[0].classList.replace('page-two', 'page-four');
      fourthPage();
    } else if (pageOne.classList.contains('page-four')) {
      grabPageClass[0].classList.replace('page-four', 'page-six');
      sixthPage();
    } else if (pageOne.classList.contains('page-six')) {
      grabPageClass[0].classList.replace('page-six', 'page-10');
      tenthPage();
    } else if (pageOne.classList.contains('page-two')) {
      grabPageClass[0].classList.replace('page-two', 'page-four');
      fourthPage();
    } else {
      grabPageClass[0].classList.replace('page-one', 'page-two');
      secondPage();
      log(grabPageClass)
    }
  });

  // back button
  goBack.addEventListener('click', (e) => {
    alert('Ain\'t no going back!');
    fourth[0].innerHTML = '<h2>Ain\'t no going back! There is nothing but darkness behind you. Choose a diffrent path or die here.</h2>';
    // increase uptake here!
    fourth[0].style.background = 'linear-gradient(rgba(255, 0, 255, 1), rgba(255,255,255, 1))';
  });

  // right button
  goRight.addEventListener('click', (e) => {

    //else
    grabPageClass[0].classList.replace('page-one', 'page-three');
    thirdPage();
  });
}
// ---------- end page 1 ----------

// ---------- page 2 ----------
const secondPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 2.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 2 ----------

// ---------- page 3 ----------
const thirdPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 3.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 3 ----------

// ---------- page 4 ----------
const fourthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Page! 4 This is page 4.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 4 ----------

// ---------- page 5 ----------
const fifthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 5.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 5 ----------

// ---------- page 6 ----------
const sixthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 6.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 6 ----------

// ---------- page 7 ----------
const seventhPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 7.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 7 ----------

// ---------- page 8 ----------
const eighthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 8.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 8 ----------

// ---------- page 9 ----------
const ninthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 9.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 9 ----------

// ---------- page 10 ----------
const tenthPage = () => {
  // dosimeter update

  // Block of text on page
  const mainText = `<p> Hi. This is page 10.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the ${pen.name}. When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 10 ----------

// ========== event listiners ==========
// title page start button
const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', (e) => {
  document.querySelector('#start-page').style.display = 'none';
  document.querySelector('#page-one').style.display = 'flex';
  firstPage();
});

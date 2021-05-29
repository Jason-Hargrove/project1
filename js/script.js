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
const grabPageClass = document.querySelectorAll('.page-one');

const leftColumn = document.querySelectorAll('div.left-column');
const first = document.querySelectorAll('div.first');
const second = document.querySelectorAll('div.second');
const third = document.querySelectorAll('div.third');

const rightColumn = document.querySelectorAll('div.right-column');
const fourth = document.querySelectorAll('div.fourth');
const fifth = document.querySelectorAll('div.fifth');


// ========== global fuinctions ==========
// math random
const getRandomInt = () => {
  return Math.floor(Math.random() * (400 - 75) + 75);
}

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

const makeRestartButton = (i) => {
  const newButton = document.createElement('button');
  newButton.classList.add('restart-button');
  newButton.innerHTML = 'Restart the Game';
  fifth[i].appendChild(newButton);
}


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
    this.items = [];
  }
  addToUptake(i) {
    this.uptake += i;
  }
  pickUp(i, u) {
    // this.items.push(i);
    this.uptake += u;
    // placing the wrench into the list.
    const newUl = document.createElement('ul');
    newUl.classList.add('unordered-list');
    second[0].appendChild(newUl);
    // ...dom node
    const unorderedList = document.querySelector('.unordered-list');
    // ...place items in list
    log()
    const updateItemsList = () => {
      let li = document.createElement('li');
      li.textContent = i.name;
      unorderedList.appendChild(li);
      log(i)
      log(u)
    }
    updateItemsList();
  }
  // ----- end picUp -----
  getUptake() {
    return this.uptake;
  }
}


// ========== instantiate classes ==========

const player = new Character('Player', 100);

const adjustableWrench = new Character('Wrench', 12);
const resperator = new Character('Resperator', 50);


// %%%%%%%%%%@ page # ONE. there's a lot going on here @%%%%%%%%%%

// ---------- page 1 ----------

const firstPage = () => {

  // dosimeter
  const dosimeter = () => {
    const doseRate = `<center> <h4>DOSE</h4> <h3 class="final-dose">${player.uptake}</h3>mSv</center>`;
    first[0].innerHTML = doseRate;
  }
  dosimeter();

  // Block of text on page
  const mainText = `<p> Hi. This is page 1. the text content on the page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;

  // make the buttons
  leftButton(0);

  backButton(0);

  rightbutton(0);


  // ----- dom nodes -----
  const goLeft = document.querySelector('.left-button');
  const goBack = document.querySelector('.back-button');
  const goRight = document.querySelector('.right-button');

  const finalDose = document.querySelectorAll('.final-dose');

  // ---------- begin page ONE event listiners ----------

  // <---------- LEFT button
  goLeft.addEventListener('click', (e) => {
   // death note
   if (player.uptake >= 1000) {
     // css changes
     fourth[0].style.background = 'linear-gradient(rgba(255, 0, 255, 1), rgba(255,255,255, 1))';
     rightColumn[0].style.cssText += 'color:yellow;padding-right:30px;';
     fourth[0].style.cssText += 'color:yellow;padding-left:40px;';
     //remove buttons and left column
     goLeft.remove();
     goRight.remove();
     goBack.remove();
     leftColumn[0].remove();
     // restart
     makeRestartButton(0);
     let listen = () => {
       const restart = document.querySelector('.restart-button');
       restart.addEventListener('click', (e) => {
         document.location.href = "";
       });
     }
     listen();
     thirteenthPage();
    } else if (pageOne.classList.contains('page-two')) {
      grabPageClass[0].classList.replace('page-two', 'page-four');
      fourthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-four')) {
      grabPageClass[0].classList.replace('page-four', 'page-six');
      sixthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-six')) {
      grabPageClass[0].classList.replace('page-six', 'page-eight');
      eighthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-eight')) {
      grabPageClass[0].classList.replace('page-eight', 'page-ten');
      // css changes
      fourth[0].style.background = 'linear-gradient(rgba(255, 0, 255, 1), rgba(255,255,255, 1))';
      rightColumn[0].style.cssText += 'color:yellow;padding-right:30px;';
      fourth[0].style.cssText += 'color:yellow;padding-left:40px;';
      //remove buttons and left column
      goLeft.remove();
      goRight.remove();
      goBack.remove();
      leftColumn[0].remove();
      // restart
      makeRestartButton(0);
      let listen = () => {
        const restart = document.querySelector('.restart-button');
        restart.addEventListener('click', (e) => {
          document.location.href = "";
        });
      }
      listen();
      tenthPage();
      } else if (pageOne.classList.contains('page-three')) {
      grabPageClass[0].classList.replace('page-three', 'page-five');
      fifthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-five')) {
      grabPageClass[0].classList.replace('page-five', 'page-seven');
      seventhPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-seven')) {
      grabPageClass[0].classList.replace('page-seven', 'page-nine');
      ninthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-nine')) {
      grabPageClass[0].classList.replace('page-nine', 'page-ten');
      goLeft.remove();
      goRight.remove();
      goBack.remove();
      leftColumn[0].remove();
      makeRestartButton(0);
      let listen = () => {
        const restart = document.querySelector('.restart-button');
        restart.addEventListener('click', (e) => {
          document.location.href = "";
        });
      }
      listen();
      tenthPage();
    } else {
      grabPageClass[0].classList.replace('page-one', 'page-two');
      secondPage();
      // pick up the WRENCH
      const wrenchListen = () => {
        const wrench = document.querySelector('.item');
        wrench.addEventListener('mouseover', (e) => {
          player.pickUp(adjustableWrench, 12);
          dosimeter();
        }, {once : true});
      }
      wrenchListen();
      player.uptake += getRandomInt();
      dosimeter();
    }
  });

  // <---------- BACK button ---------->
  goBack.addEventListener('click', (e) => {
    alert('Ain\'t no going back!');
    fourth[0].innerHTML = '<h2>Ain\'t no going back! There\'s nothing but darkness behind you. Choose a diffrent path or die here.</h2>';
    // increase uptake here!
    fourth[0].style.background = 'linear-gradient(rgba(255, 0, 255, 1), rgba(255,255,255, 1))';
    player.uptake += 75;
    dosimeter();
  });

  // RIGHT button ---------->
  goRight.addEventListener('click', (e) => {
    // death note
    if (player.uptake >= 1000) {
      // css changes
      fourth[0].style.background = 'linear-gradient(rgba(255, 0, 255, 1), rgba(255,255,255, 1))';
      rightColumn[0].style.cssText += 'color:yellow;padding-right:30px;';
      fourth[0].style.cssText += 'color:yellow;padding-left:40px;';
      //remove buttons and left column
      goLeft.remove();
      goRight.remove();
      goBack.remove();
      leftColumn[0].remove();
      // restart
      makeRestartButton(0);
      let listen = () => {
        const restart = document.querySelector('.restart-button');
        restart.addEventListener('click', (e) => {
          document.location.href = "";
        });
      }
      listen();
      thirteenthPage();
    } else if (pageOne.classList.contains('page-three')) {
      grabPageClass[0].classList.replace('page-three', 'page-five');
      fifthPage();

//-----------------//-------------------//------------------//--------------------////

      // pick up the RESPERATOR
      const resperatorListen = () => {
        const resperatorNode = document.querySelector('.item');
        resperatorNode.addEventListener('mouseover', (e) => {
          player.pickUp(resperator, 50);
          dosimeter();
        }, {once : true});
      }
      resperatorListen();

//-----------------//-------------------//------------------//--------------------////

      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-five')) {
      grabPageClass[0].classList.replace('page-five', 'page-seven');
      seventhPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-seven')) {
      grabPageClass[0].classList.replace('page-seven', 'page-nine');
      ninthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-nine')) {
      grabPageClass[0].classList.replace('page-nine', 'page-ten');
      goLeft.remove();
      goRight.remove();
      goBack.remove();
      leftColumn[0].remove();
      makeRestartButton(0);
      let listen = () => {
        const restart = document.querySelector('.restart-button');
        restart.addEventListener('click', (e) => {
          document.location.href = "";
        });
      }
      listen();
      tenthPage();
    } else if (pageOne.classList.contains('page-two')) {
      grabPageClass[0].classList.replace('page-two', 'page-four');
      fourthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-four')) {
      grabPageClass[0].classList.replace('page-four', 'page-six');
      sixthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-six')) {
      grabPageClass[0].classList.replace('page-six', 'page-eight');
      eighthPage();
      player.uptake += getRandomInt();
      dosimeter();
    } else if (pageOne.classList.contains('page-eight')) {
      grabPageClass[0].classList.replace('page-eight', 'page-ten');
      goLeft.remove();
      goRight.remove();
      goBack.remove();
      leftColumn[0].remove();
      makeRestartButton(0);
      let listen = () => {
        const restart = document.querySelector('.restart-button');
        restart.addEventListener('click', (e) => {
          document.location.href = "";
        });
      }
      listen();
      tenthPage();
    } else {
      grabPageClass[0].classList.replace('page-one', 'page-three');
      thirdPage();
      player.uptake += getRandomInt();
      dosimeter();
    }
  });
}
// ---------- end page ONE event listiners ----------
// ---------- end page ONE ----------

// ---------- page 2 ----------
const secondPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 2.This is the text on the second page. the player should read this. It should show pick up items like the <span class="item">${adjustableWrench.name}</span> and the pen When you click on them, they over there yeah</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 2 ----------

// ---------- page 3 ----------
const thirdPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 3.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 3 ----------

// ---------- page 4 ----------
const fourthPage = () => {
  // Block of text on page
  const mainText = `<p> Page! 4 This is page 4.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 4 ----------

// ---------- page 5 ----------
const fifthPage = () => {
  // Block of text on page
  const mainText = `<p>Hi. This is page 5. Pick up the <span class="item">${resperator.name}</span> and put it on quickly. fdsfdsfdsfdsfdsfdsfsdfdsfdfdsfdsfdsfsOr</p>`
  fourth[0].innerHTML = mainText;
  log(resperator)
}
// ---------- end page 5 ----------

// ---------- page 6 ----------
const sixthPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 6.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 6 ----------

// ---------- page 7 ----------
const seventhPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 7.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 7 ----------

// ---------- page 8 ----------
const eighthPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 8.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 8 ----------

// ---------- page 9 ----------
const ninthPage = () => {
  // Block of text on page
  const mainText = `<p> Hi. This is page 9.This is the text on the second page. the player should read this. It should show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list. Hi. This is the text content on the page. the player should read this. It sould show pick up items like the ${adjustableWrench.name} and the pen When you click on them, they should update your item list.</p>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 9 ----------

// ---------- page 10 ----------
const tenthPage = () => {
  // Block of text on page
  const mainText = `<h2>Congradulations! Somehow you managed to escape. Now you can live a couple of year before you body succumbs to all the yummy radiation it soaked up today.</h2>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 10 ----------

// ---------- page 13 ----------
const thirteenthPage = () => {
  // Block of text on page
  const mainText = `<h2>You're dead. You didn't make it. How about that? Nothing to see here.</h2>`
  fourth[0].innerHTML = mainText;
}
// ---------- end page 13 ----------


// ========== event listiners ==========
// title page start button
const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', (e) => {
  document.querySelector('#start-page').style.display = 'none';
  document.querySelector('#page-one').style.display = 'flex';
  firstPage();
});

// cached dom nodes
const firstChild = document.querySelector('.first-child');
const secondChild = document.querySelector('.second-child');
const thirdChild = document.querySelector('.third-child');


firstChild.innerHTML = '<h1>Accumulative Dose</h1>';

secondChild.innerHTML = '<p>Escape if you can!</p>';


// button
const newButton = document.createElement('button');

newButton.innerHTML = 'Start the Game';

thirdChild.appendChild(newButton);
// end button



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


const startGame = () => {

}

// document.body.onload = startGame;

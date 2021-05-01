'use strict'

// We'll have a global variable to store the currently selected color
let selectedColor = 'hsl(61, 35%, 75%)';

// As soon as the DOM has loaded, call the init() function
document.addEventListener('DOMContentLoaded', init);

// Registers all event listeners.
function init() {
    // Let's start with a default value of 25 boxes per row
    let numOfBoxes = 25;
    document.getElementById('numberFields').value = numOfBoxes;

    // Adding the event listener for the 'Reset' button
    document.querySelector('button').addEventListener('click', buttonClick);

    // If the enter key is pressed in the number field, the 'Reset' button should trigger
    document.getElementById('numberFields').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            document.querySelector('button').click();
        }
    })

    // Clicking the color buttons should change the currently selected color
    let colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', colorClick);
    }

    drawPlayground(numOfBoxes);
}

//  Draws a grid with the given number of boxes and attaches it to the DOM.
function drawPlayground(numOfBoxes) {
    clearPlayground();

    let playground = document.createElement('div');
    playground.id = "playground";

    let sectionMid = document.getElementsByClassName('section-mid')[0];
    sectionMid.appendChild(playground);

    for (let i = 0; i < numOfBoxes; i++) {
        for (let j = 0; j < numOfBoxes; j++) {
            let elem = document.createElement('div');
            elem.classList.add('box');

            elem.style.height = `${(1/numOfBoxes) * 100}%`;
            elem.style.width = `${(1/numOfBoxes) * 100}%`;

            elem.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = selectedColor;
            });

            playground.appendChild(elem);
        }
    }
}

//  Deletes the current grid.
function clearPlayground() {
    let playground = document.getElementById('playground');
    playground.remove();
}

// Click handler for the Reset button.
function buttonClick(e) {
    let numOfBoxes = document.getElementById('numberFields').value;
    document.querySelector('.controls-errorMessage').classList.add('invisible');

    // Do we have a number?
    if (numOfBoxes != null && isNaN(numOfBoxes) === false) {
        if (numOfBoxes < 1) {
            document.getElementById('message').textContent = "Should be 1 or greater";
            document.querySelector('.controls-errorMessage').classList.remove('invisible');
            return;
        } else if (numOfBoxes > 99) {
            document.getElementById('message').textContent = "Should be 99 or smaller";
            document.querySelector('.controls-errorMessage').classList.remove('invisible');
            return;
        }
    }
    drawPlayground(numOfBoxes);
}

// Click handler for the color buttons.
function colorClick(e) {
    switch (e.target.id) {
        case 'palespringbud': 
            selectedColor = 'hsl(61, 35%, 75%)';
            break;
        case 'cambridgeblue':
            selectedColor = 'hsl(154, 18%, 67%)';
            break;
        case 'airsuperiorityblue':
            selectedColor = 'hsl(202, 30%, 59%)';
            break;
        case 'bluemunsell':
            selectedColor = 'hsl(190, 75%, 37%)';
            break;
        case 'cybergrape':
            selectedColor = 'hsl(256, 30%, 38%)';
            break;
        case 'white':
            selectedColor = 'hsl(0, 0%, 100%)';
            break;
    }
}
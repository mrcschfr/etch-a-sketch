'use strict'

// We'll have a global variable to store the currently selected color
let selectedColor = 'hsl(61, 35%, 75%)';

// As soon as the DOM has loaded, call the init() function
document.addEventListener('DOMContentLoaded', init);

/**
 * Registers all event listeners.
 * 
 * @return {void} 
 */

function init() {
    let numOfBoxes = 25;

    document.getElementById('numberFields').value = numOfBoxes;
    document.getElementById('numberFields').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            document.querySelector('button').click();
        }
    })

    let colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', (e) => {
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
        })
    }

    document.querySelector('button').addEventListener('click', (e) => {
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
    });

    drawPlayground(numOfBoxes);
}

/**
 * Draws a grid with the given number of boxes and attaches it to the DOM.
 *
 * @param {number} numOfBoxes The number of boxes to draw in each line of the grid.
 * @return {void} 
 */

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

/**
 * Deletes the current grid.
 *
 * @return {void} 
 */

function clearPlayground() {
    let playground = document.getElementById('playground');
    playground.remove();
}
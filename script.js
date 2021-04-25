'use strict'

let numOfBoxes = 25;
const playground = document.getElementById('playground');

function drawPlayground(numOfBoxes) {
    for (let i = 0; i < numOfBoxes; i++) {
        for (let j = 0; j < numOfBoxes; j++) {
            let elem = document.createElement('div');
            elem.classList.add('box');
            elem.style.height = `${(1/numOfBoxes) * 100}%`;
            elem.style.width = `${(1/numOfBoxes) * 100}%`;
            playground.appendChild(elem);
        }
    }
}

drawPlayground(numOfBoxes);

// get handler for all boxes
let allBoxes = document.querySelectorAll('.box');

for(let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
}

document.querySelector('button').addEventListener('click', (e) => {
    numOfBoxes = prompt('How many boxes per side?');
    drawPlayground(numOfBoxes);
});
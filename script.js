'use strict'

let numOfBoxes = 25;
document.getElementById('numberFields').value = numOfBoxes;

drawPlayground(numOfBoxes);

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
                e.target.style.backgroundColor = 'black';
            });

            playground.appendChild(elem);
        }
    }
}

function clearPlayground() {
    let playground = document.getElementById('playground');
    playground.remove();
}

// get handler for all boxes
let allBoxes = document.querySelectorAll('.box');

for(let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
}

document.getElementById('numberFields').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('button').click();
    }
})

document.querySelector('button').addEventListener('click', (e) => {
    let numOfBoxes = document.getElementById('numberFields').value;
    document.getElementById('message').textContent = "";

    // Do we have a number?
    if (numOfBoxes != null && isNaN(numOfBoxes) === false) {
        if (numOfBoxes < 1) {
            document.getElementById('message').textContent = "Should be 1 or greater";
            return;
        } else if (numOfBoxes > 99) {
            document.getElementById('message').textContent = "Should be 99 or smaller";
            return;
        }
    }
    drawPlayground(numOfBoxes);
});
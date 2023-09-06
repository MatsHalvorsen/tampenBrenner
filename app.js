//model
var divElement = document.getElementById('x');

//view
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="x" onmouseover="changeColor(this)" onmouseout="changeBack(this)">★</div>
    <div id="start">Start by hovering over the star</div>

    `;
}


//controller
function startGame() {
    document.createElement
}

function changeColor(x) {
    x.style.color = 'rgb(0, 250, 250)';
    x.style.cursor = 'crosshair';
    x.style.left = `${randomNumber()}`;
    x.style.top = `${randomNumber()}`;
    console.log(x)
    updateView();
}



function changeBack(x) {
    x.style.color = 'rgb(0, 250, 250)';
    updateView();
}

function randomNumber() {
    return Math.floor(Math.random() * 797) + "px";
}

console.log(randomNumber());

/*

 //model
var divElement = document.getElementById('x');

//view
updateView();

function updateView() {
    document.getElementById('app').innerHTML =  `

    `;
}


//controller
function changeColor(x, divElement) {
    x.style.color = 'rgb(0, 250, 250)';
    x.style.cursor = 'crosshair';
    divElement.style.left = `${randomNumber()}`;
    divElement.style.top = `${randomNumber()}`;
    //x.style.backgroundColor = "blue";

}

function changeBack(x) {
    x.style.color = 'rgb(250, 250, 250)';
}

function randomNumber() {
    return Math.floor(Math.random() * 1001);
}

console.log(randomNumber()); */
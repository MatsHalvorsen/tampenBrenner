//model
var divElement = document.getElementById('x');

//view
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
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

console.log(randomNumber());
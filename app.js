//model



//view
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `

    `;
}


//controller
function changeColor(x) {
    x.style.color = 'rgb(0, 250, 250)';
    x.style.cursor = 'crosshair';
    //x.style.backgroundColor = "blue";

}

function changeBack(x) {
    x.style.color = 'rgb(250, 250, 250)';
}
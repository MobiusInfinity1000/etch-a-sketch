//get HTML elements
const slider = document.getElementById("slider");
const output = document.getElementById("sliderVal");
const gridContainer = document.getElementById("grid-container");
const changeGridButton = document.getElementById("changeGridButton");
const clearButton = document.getElementById('clearButton');
let gridSize = parseInt(slider.value,10);


//update slider value on load
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
  }


function addElement() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-element";
    //const newContent = document.createTextNode("Hi there and greetings!");
    //newDiv.appendChild(newContent);
    gridContainer.appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
    });
}

function changeGridSize(){
    gridContainer.innerHTML = '';
    let gridSize = parseInt(slider.value,10);
    console.log(gridSize*gridSize);
    console.log(typeof Math.pow(gridSize,2));
    for (let i=1; i<=Math.pow(gridSize,2); i++){
        addElement();

    };
      gridContainer.style["grid-template-columns"] = "repeat(" + gridSize + ", 1fr)";
}

function addElementLoop(){
    for (let i=1; i<=256; i++){
        addElement();
    }

    //setting grid property by JS so it can be changed later
    gridContainer.style["grid-template-columns"] = "repeat(16, 1fr)";
}

//When document loads, creates default value of 16 by 16 boxes
document.body.onload = addElementLoop;

//EVENT LISTENERS
//clear button functionality
clearButton.addEventListener("click", () => {
    const gridDivs = document.getElementById("grid-container").querySelectorAll(".grid-element");
    for (let i=0; i<=gridDivs.length; i++){
        gridDivs[i].style.backgroundColor = "transparent"; //assign colour to white later on 
    }
});
//change grid button functionality
changeGridButton.addEventListener("click", changeGridSize);


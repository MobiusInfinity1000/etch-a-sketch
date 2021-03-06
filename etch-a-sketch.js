//get HTML elements
const slider = document.getElementById("slider");
const output = document.getElementById("sliderVal");
const gridContainer = document.getElementById("grid-container");
const changeGridButton = document.getElementById("changeGridButton");
const clearButton = document.getElementById('clearButton');
const rgbButton = document.getElementById('rainbowButton');
// const blackButton = document.getElementById('blackButton');
const customcolourButton = document.getElementById('customColour');
let gridSize = parseInt(slider.value,10);
let rgbFlag = 0;


//update slider value on load
output.innerHTML = "Grid Width: " + slider.value;

// Update the current slider value (each time you drag the slider handle)



function changeGridSize(){
    gridContainer.innerHTML = ''; //clear grid Container before adding new divs
    let gridSize = parseInt(slider.value,10);
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
};

function generateRandomInt() {
    let randomnumber = Math.floor(Math.random() * (256 - 0 + 1)) + 0; //as max rgb value is 255
    return randomnumber;
};

function generateRandomColour(){
    rgbCol = "rgb(" + generateRandomInt() + "," + generateRandomInt() + "," + generateRandomInt() + ")";
    return rgbCol;
};

function fillGridElement() {
    if (rgbFlag==1){
        this.style.backgroundColor = generateRandomColour();
    } else {
        this.style.backgroundColor = customcolourButton.value;
    };
};

function addElement() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-element";
    //const newContent = document.createTextNode("Hi there and greetings!");
    //newDiv.appendChild(newContent);
    gridContainer.appendChild(newDiv);
    newDiv.addEventListener("mouseover", fillGridElement);
};


// function addElement() {
//     const newDiv = document.createElement("div");
//     newDiv.className = "grid-element";
//     //const newContent = document.createTextNode("Hi there and greetings!");
//     //newDiv.appendChild(newContent);
//     gridContainer.appendChild(newDiv);
//     newDiv.addEventListener("mouseover", () => {
//         newDiv.style.backgroundColor = generateRandomColour();
//     });
// };

function drawRandomColour() {
    const gridDivs = document.getElementById("grid-container").querySelectorAll(".grid-element");
    for (let i=0; i<=gridDivs.length; i++){
        gridDivs[i].removeEventListener()
    }
};

//When document loads, creates default value of 16 by 16 boxes
document.body.onload = addElementLoop;

//EVENT LISTENERS

slider.oninput = function() {
    output.innerHTML = "Grid Width: " + this.value;
  }

//clear button functionality
clearButton.addEventListener("click", () => {
    const gridDivs = document.getElementById("grid-container").querySelectorAll(".grid-element");
    for (let i=0; i<gridDivs.length; i++){
        gridDivs[i].style.backgroundColor = "white";
    };
    
});

rgbButton.addEventListener("click", () => {
    rgbFlag = 1;
});

// blackButton.addEventListener("click", () => {
//     rgbFlag = 0;
// })

customcolourButton.addEventListener("click", () => {
    rgbFlag = 0;
})

//change grid button functionality
changeGridButton.addEventListener("click", changeGridSize);


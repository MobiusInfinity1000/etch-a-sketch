function addElement() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-element";
    //const newContent = document.createTextNode("Hi there and greetings!");
    //newDiv.appendChild(newContent);
    document.getElementById("grid-container").appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "white";
    });
}


function addElementLoop(){
    for (let i=1; i<=256; i++){
        addElement();

    }

    //setting grid property by JS so it can be changed later
    document.getElementById("grid-container").style["grid-template-columns"] = "repeat(16, 1fr)";
}
document.body.onload = addElementLoop;

//clear button functionality
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener("click", () => {
    const gridDivs = document.getElementById("grid-container").querySelectorAll(".grid-element");
    for (let i=0; i<256; i++){
        gridDivs[i].style.backgroundColor = "#062F4F"; //assign colour to white later on 
    }
});


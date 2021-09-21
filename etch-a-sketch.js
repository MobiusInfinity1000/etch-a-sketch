function addElement() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-element";
    //const newContent = document.createTextNode("Hi there and greetings!");
    //newDiv.appendChild(newContent);
    document.getElementById("grid-container").appendChild(newDiv);
}

function addElementLoop(){
    for (let i=1; i<=256; i++){
        addElement();
    }

    //setting grid property by JS so it can be changed later
    document.getElementById("grid-container").style["grid-template-columns"] = "repeat(16, 1fr)";
}
document.body.onload = addElementLoop;



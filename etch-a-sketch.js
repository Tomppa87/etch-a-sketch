
const container = document.querySelector(".container")
container.style.height = "800px"
container.style.width = "800px"
let defaultGridSize = 16;
let gridSidePx = (800/defaultGridSize)
let row;
let column;
console.log(gridSidePx)

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.style.height = "50px";

function createGrid(gridSideCount) {
    for (let i = 0; i < gridSideCount; i++) {
        row = document.createElement("div");
        row.id = "row" +i;
        row.classList.add("row");
        row.style.height = gridSidePx+"px";
        for (let y = 0; y < gridSideCount; y++) {
            column = document.createElement("div");
            column.id = "column" +i;
            column.classList.add("grid")
            column.style.width = gridSidePx+"px";
            console.log(column.style.width)
            row.appendChild(column)
        }
        container.appendChild(row)
    }
    
}

createGrid(defaultGridSize)

function clearGrid() {
    for (let i = 0; i < container.children.length; i++) {
        console.log(container.children[i])
        for (let j = 0; j < container.children.length; j++) {
            console.log(container.children[i].children[j])
            container.children[i].children[j].style.backgroundColor = "";
        }
    }       
};

function randomColour() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
    
}


container.addEventListener("mouseover", function(event) {
    if (multiColorStatus === true) {
        event.target.style.backgroundColor = randomColour()
    }

    else if (darkModeStatus === true) {
        let opacity = Number(event.target.style.opacity);
        event.target.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
        event.target.style.backgroundColor = "black";
    }   else {
        event.target.style.backgroundColor = "purple"
    }    
})

const clearBtn = document.getElementById("clearButton")
clearBtn.addEventListener("click", clearGrid)

const newGridBtn = document.getElementById("newGridButton");
newGridBtn.addEventListener("click", function() {
    let newAmount = prompt("How many grids per side? (Max 100)") 
    if ((newAmount > 100) || (newAmount <= 0)) {
        alert("ERROR");
        return 0;
    } 
    
    newGrid(newAmount)
})

function newGrid(input) {
    container.replaceChildren()
    for (let i = 0; i < input; i++) {
        let row = document.createElement("div");
        row.id = "row" +i;
        row.classList.add("row");
        row.style.height = (800/input)+"px";
        for (let y = 0; y < input; y++) {
            let column = document.createElement("div");
            column.id = "column" +i;
            column.classList.add("grid")
            column.style.width = (800/input)+"px";
            console.log(column.style.width)
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}
let multiColorStatus = false

const multiColor = document.getElementById("colorMode")
multiColor.addEventListener("click", function() {
    if (multiColorStatus === false) {
        multiColor.style.backgroundColor = "#00FFFF"
        multiColorStatus = true

    }
    else {
        multiColor.style.backgroundColor = ""
        multiColorStatus = false
    }
    
})
let darkModeStatus = false

const darkMode = document.getElementById("darkModeButton")
darkMode.addEventListener("click", function() {
    if (darkModeStatus === false) {
        darkMode.style.backgroundColor = "#8B008B"
        darkModeStatus = true

    }
    else {
        darkMode.style.backgroundColor = ""
        darkModeStatus = false
    }
    

})
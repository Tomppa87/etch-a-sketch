//const body = document.querySelector("body")

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

//Remember to make this dynamic based on grid size if changed
function clearGrid() {
    for (let i = 0; i < container.children.length; i++) {
        console.log(container.children[i])
        for (let j = 0; j < container.children.length; j++) {
            console.log(container.children[i].children[j])
            container.children[i].children[j].style.backgroundColor = "";
        }
    }
    
       
       
};


//clearGrid()

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "purple"
})

const clearBtn = document.getElementById("clearButton")
clearBtn.addEventListener("click", clearGrid)

const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let newAmount = prompt("How many grids per side? (Max 100)") 
    while (container.firstChild) {
            container.removeChild(container.lastChild)
    };
    newGrid(newAmount)
})

function newGrid(input) {
    for (let i = 0; i < (input*input); i++) {
        var grid = document.createElement("div");
        grid.id = "row" +i;
        grid.classList = "rowgrid"
        container.appendChild(grid)
    }
}
//const body = document.querySelector("body")

const container = document.querySelector(".container")
container.style.height = "800px"
container.style.width = "800px"
let defaultGridSize = 16;
let gridSidePx = (800/defaultGridSize)
console.log(gridSidePx)

function createGrid(gridSideCount) {
    for (let i = 0; i < gridSideCount; i++) {
        let row = document.createElement("div");
        row.id = "row" +i;
        row.classList.add("row");
        row.style.height = gridSidePx+"px";
        for (let y = 0; y < gridSideCount; y++) {
            let column = document.createElement("div");
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



container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "purple"
})

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
const container = document.querySelector("#container");
const buttonGrid = document.querySelector("#buttonGrid")

function startGrid(){

for(let i=0; i<256; i++){
    const div = document.createElement("div");  
    container.appendChild(div);
    div.classList.add("grid");
    div.classList.add("grid-height");
    
}
grayColor();
}
function resizeGrid(){

buttonGrid.addEventListener("click", function(){

    let gridSize = prompt("Enter desired square per side(max 100)");
    let intGridSize = parseInt(gridSize);



    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }

   
    let blockHeight = 800/ intGridSize;
    
    for(let i =0; i<Math.pow(intGridSize, 2); i++){
        const div = document.createElement("div");  
        container.appendChild(div);
        div.classList.add("grid");
        div.style.height = blockHeight + "px";
    }

    grayColor();
});


}


function grayColor(){
    const divs = document.querySelectorAll(".grid")
    divs.forEach((div) => {
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "gray";
        });
    });
    
}

startGrid();
resizeGrid();
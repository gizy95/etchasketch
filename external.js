const container = document.querySelector("#container");
const buttonGrid = document.querySelector("#buttonGrid")
const buttonRainbow = document.querySelector("#rainbow")

function starterGrid(){

    for(let i=0; i<256; i++){
        const div = document.createElement("div");  
        container.appendChild(div);
        div.classList.add("grid");
        div.classList.add("grid-height");
    
    }
    grayColor();
    rainbow();
}

function resizeGrid(){

    buttonGrid.addEventListener("click", function(){

    let gridSize = prompt("Enter desired square per side(max 100)");
    
    if(gridSize === null || gridSize === ""){
        return;
    }

    let intGridSize = parseInt(gridSize);
    while(intGridSize > 100 || intGridSize < 0){
        intGridSize = prompt(gridSize +" is not valid. Please pick a number greater than 0 or lower of 100")
        
    }

    if(intGridSize > 100 || gridSize < 0){
        return;
    }


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
    rainbow();
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

function rainbow(){
buttonRainbow.addEventListener("click", () =>{
    const divs = document.querySelectorAll(".grid")
    divs.forEach((div) => {
        div.addEventListener("mouseover", () =>{
            const randomColor = Math.floor(Math.random()*16777215).toString(16)
            console.log(randomColor);
            div.style.backgroundColor = "#" + randomColor;
        });
    });

});
}



starterGrid();
resizeGrid();
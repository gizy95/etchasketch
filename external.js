const container = document.querySelector("#container");

for(let i=0; i<256; i++){
    const div = document.createElement("div");  
    container.appendChild(div);
    div.classList.add("grid");
}

const divs = document.querySelectorAll(".grid")
divs.forEach((div) => {
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor = "gray";
    });
});


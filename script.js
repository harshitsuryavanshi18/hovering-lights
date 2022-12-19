let container = document.querySelector(".container");
let boxes = 500 + 3;

for(let i = 0; i<boxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box")
    console.log(box)
    container.appendChild(box)

    box.addEventListener('mouseenter', () => {
        let color = "#";
        for (let i = 0; i < 3; i++)
          color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
        box.style.backgroundColor = color;
        box.style.boxShadow = `0px 0px 2px ${color}, 0px 0px 10px ${color}`
    })

    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = "#4f4f4f";
        box.style.boxShadow = "0px 0px 0px black"
    })

}
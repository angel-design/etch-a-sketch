const container = document.querySelector("#container");

const btn = document.querySelector("#btn");

btn.addEventListener("click", newGrid);

function newGrid() {
    container.innerHTML = ""
    const sketchColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

    let side = prompt("How many squares on a side do you want?");

    btn.style.backgroundColor = sketchColor;

    for (let i = 0; i < side; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < side; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = 100 / side + "vw";
            row.append(square);
        }
        row.classList.add("row");
        row.style.height = 100 / side + "vh";
        container.append(row);
    }

    function isBlack(tagName, event, fn) {
        let squares = document.getElementsByClassName(tagName);
        for (let k = 0; k < squares.length; k++) {
            squares[k].addEventListener(event, fn, false);
        }
    }

    function handleHover() {
        this.style.backgroundColor = sketchColor;
    }

    isBlack("square", "mouseover", handleHover);
}

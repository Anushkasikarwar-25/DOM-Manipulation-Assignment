
//Task 1: Change Text and Style
const mainHeading = document.getElementById("mainHeading");
const para = document.getElementById("para");

mainHeading.innerText = "Welcome to DOM!";
para.style.color = "green";

 //Task 2: Replace Text with Bold HTML
const info = document.getElementById("info");
info.innerHTML = "<strong>This is bold text now!</strong>";

// Task 3: Style Multiple Elements
const notes = document.querySelectorAll(".note");
for(  const note of notes){
    note.style.fontStyle ="italic ";
    
}
// Task 4: Add a New Paragraph
const newPara = document.createElement("p")
newPara.textContent ="This paragraph was added using JavaScript!";
const container = document.getElementById("container");
container.append(newPara);

// Task 5: Change Image Source
const image = document.getElementById("myImage");
image.src = "image2.png";

// Task 6: innerHTML, innerText & textContent
const heading = document.getElementById("main-heading")
console.log(heading.innerText);
heading.innerHTML = "Welcome <span>Student</span>";

const description = document.getElementsByClassName("description")[0];
description.textContent = "DOM Is Powerful";
description.style.color = "blue";

const btn = document.querySelectorAll(".button");
    buttons[1].innerText = "Clicked!";

    
    const span = document.querySelector("div span");


console.log("innerText:", span.innerText);
console.log("textContent:", span.textContent);

// Task 7: Generate a 5x5 Table 
const table = document.createElement('table');
let cellNumber = 1;

for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');
    
    for (let j = 0; j < 5; j++) {
        const cell = document.createElement('td');
        cell.innerText = cellNumber;
        row.appendChild(cell);
        cellNumber++;
    }
    
    table.appendChild(row);
}

document.body.appendChild(table);
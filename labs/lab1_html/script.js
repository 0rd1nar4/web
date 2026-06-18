// картинки
let pics = document.querySelectorAll(".pic");

for (let i = 0; i < pics.length; i++) {
    pics[i].onclick = function () {
        console.log(this.getAttribute("width"));
    };
}

// посилання
let links = document.querySelectorAll(".link");

function addTitle() {
    this.setAttribute("title", this.getAttribute("href"));
}

function removeTitle() {
    this.removeAttribute("title");
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", addTitle);
    links[i].addEventListener("mouseout", removeTitle);
}

// input
let inputs = document.querySelectorAll(".inputText");
let demo = document.getElementById("demo");
let firstClick = true;

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
        demo.textContent = this.value;

        if (firstClick) {
            console.log(this.value);
            firstClick = false;
        } else {
            alert(this.value);
        }
    });
}

// числа словами
let numbers = document.querySelectorAll(".number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        let num = Number(this.getAttribute("data-num"));
        this.textContent = num * num;
    };
}

// блоки div
let blocks = document.querySelectorAll(".colorBox");

function paintRed() {
    this.style.background = "red";
    this.removeEventListener("click", paintRed);
    this.addEventListener("click", paintGreen);
}

function paintGreen() {
    this.style.background = "green";
    this.removeEventListener("click", paintGreen);
    this.addEventListener("click", paintRed);
}

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", paintRed);
}

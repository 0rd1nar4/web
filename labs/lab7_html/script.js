let startPage = document.getElementById("startPage");
let gamePage = document.getElementById("gamePage");
let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let field = document.getElementById("field");
let time = document.getElementById("time");
let tableBody = document.getElementById("tableBody");

let current = 1;
let timer = null;
let seconds = 60;
let gameNumber = 0;
let results = [];

startBtn.addEventListener("click", function () {
    startPage.classList.add("hidden");
    gamePage.classList.remove("hidden");
    startGame();
});

restartBtn.addEventListener("click", function () {
    startGame();
});

function startGame() {
    clearInterval(timer);
    current = 1;
    seconds = 60;
    time.textContent = seconds;
    field.innerHTML = "";

    let numbers = [];
    for (let i = 1; i <= 20; i++) {
        numbers.push(i);
    }

    numbers.sort(function () {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < numbers.length; i++) {
        let item = document.createElement("div");
        item.className = "item";
        item.textContent = numbers[i];
        item.style.fontSize = (16 + Math.floor(Math.random() * 20)) + "px";
        item.style.color = randomColor();
        item.addEventListener("click", checkNumber);
        field.appendChild(item);
    }

    timer = setInterval(function () {
        seconds--;
        time.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(timer);
            alert("Час закінчився");
            startGame();
        }
    }, 1000);
}

function checkNumber() {
    let num = Number(this.textContent);

    if (num == current) {
        this.classList.add("active");
        current++;

        if (current > 20) {
            clearInterval(timer);
            let used = 60 - seconds;
            alert("Вітаю! Ви завершили гру за " + used + " с.");
            saveResult(used);
            startGame();
        }
    } else {
        alert("Не вірна цифра");
    }
}

function saveResult(used) {
    gameNumber++;
    results.push({
        name: "Гра " + gameNumber,
        time: used
    });
    showTable();
}

function showTable() {
    tableBody.innerHTML = "";
    let best = results[0].time;

    for (let i = 0; i < results.length; i++) {
        if (results[i].time < best) {
            best = results[i].time;
        }
    }

    for (let i = 0; i < results.length; i++) {
        let tr = document.createElement("tr");

        if (results[i].time == best) {
            tr.className = "best";
        }

        tr.innerHTML = "<td>" + results[i].name + "</td><td>" + results[i].time + " с.</td>";
        tableBody.appendChild(tr);
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    return "rgb(" + r + "," + g + "," + b + ")";
}

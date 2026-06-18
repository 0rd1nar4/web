let timeBtn = document.getElementById("timeBtn");
let timeText = document.getElementById("timeText");
let gameBtn = document.getElementById("gameBtn");
let gameText = document.getElementById("gameText");

function getTimeText() {
    let date = new Date();
    let days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    let months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    let h = String(date.getHours()).padStart(2, "0");
    let m = String(date.getMinutes()).padStart(2, "0");
    let s = String(date.getSeconds()).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");

    return h + ":" + m + ":" + s + ", " + days[date.getDay()] + ", " + day + " " + months[date.getMonth()] + " " + date.getFullYear() + " року";
}

timeBtn.addEventListener("click", function () {
    let text = getTimeText();
    timeText.textContent = text;
    console.log(text);
});

function startGame() {
    let again = true;

    while (again) {
        let number = Math.floor(Math.random() * 51);
        let tryCount = 0;
        let win = false;

        while (!win) {
            let user = Number(prompt("Вгадайте число від 0 до 50"));
            tryCount++;

            let now = getTimeText();
            console.log(now + " Спроба " + tryCount + ": число " + user);

            if (user == number) {
                alert("За " + tryCount + " спроб ви вгадали число " + number);
                gameText.textContent = "Остання гра: число " + number + ", спроб: " + tryCount;
                win = true;
            } else {
                let diff = Math.abs(number - user);

                if (diff > 20) {
                    alert("Холодно");
                } else if (diff > 8) {
                    alert("Тепло");
                } else {
                    alert("Гаряче");
                }
            }
        }

        again = confirm("Спробувати ще раз?");
    }
}

gameBtn.addEventListener("click", startGame);

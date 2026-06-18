let dayBtn = document.getElementById("dayBtn");
let dayText = document.getElementById("dayText");
let energyBtn = document.getElementById("energyBtn");
let energyText = document.getElementById("energyText");

let shafa = {
    ua: {
        question: "Введіть номер дня тижня від 1 до 7",
        wrong: "Неправильний ввід",
        days: ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"]
    },
    en: {
        question: "Enter the day number of the week from 1 to 7",
        wrong: "Wrong input",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }
};

dayBtn.addEventListener("click", function () {
    let lang = "";

    while (lang != "ua" && lang != "en") {
        lang = prompt('Виберіть мову "ua" або "en"').toLowerCase();
        if (lang != "ua" && lang != "en") {
            alert("Неправильний ввід даних");
        }
    }

    let day = 0;
    while (day < 1 || day > 7 || isNaN(day)) {
        day = Number(prompt(shafa[lang].question));
        if (day < 1 || day > 7 || isNaN(day)) {
            alert(shafa[lang].wrong);
        }
    }

    let text = shafa[lang].days[day - 1];
    dayText.textContent = text;
    alert(text);
});

energyBtn.addEventListener("click", function () {
    let network = {
        stations: [
            { name: "Станція 1", power: 80 },
            { name: "Станція 2", power: 45 }
        ],
        panels: [
            { name: "Панель 1", day: 3 },
            { name: "Панель 2", day: 5 },
            { name: "Панель 3", day: 2 }
        ],
        houses: [
            { name: "Будинок 1", flats: 120 },
            { name: "Будинок 2", flats: 80 },
            { name: "Будинок 3", flats: 200 }
        ],
        line: {
            power: 30,
            price: 100
        }
    };

    let dayGenerate = 0;
    let nightGenerate = 0;
    let dayNeed = 0;
    let nightNeed = 0;

    for (let i = 0; i < network.stations.length; i++) {
        dayGenerate += network.stations[i].power;
        nightGenerate += network.stations[i].power;
    }

    for (let i = 0; i < network.panels.length; i++) {
        dayGenerate += network.panels[i].day;
    }

    for (let i = 0; i < network.houses.length; i++) {
        dayNeed += network.houses[i].flats * 0.004;
        nightNeed += network.houses[i].flats * 0.001;
    }

    let dayBalance = dayGenerate - dayNeed;
    let nightBalance = nightGenerate - nightNeed;
    let text = "";

    text += "Денна генерація: " + dayGenerate.toFixed(2) + " МВт\n";
    text += "Денне споживання: " + dayNeed.toFixed(2) + " МВт\n";
    text += "Баланс вдень: " + dayBalance.toFixed(2) + " МВт\n\n";

    text += "Нічна генерація: " + nightGenerate.toFixed(2) + " МВт\n";
    text += "Нічне споживання: " + nightNeed.toFixed(2) + " МВт\n";
    text += "Баланс вночі: " + nightBalance.toFixed(2) + " МВт\n\n";

    if (dayBalance > 0) {
        text += "Вдень можна продати електроенергію.\n";
    } else {
        text += "Вдень треба купити електроенергію.\n";
    }

    if (nightBalance > 0) {
        text += "Вночі можна продати електроенергію.";
    } else {
        text += "Вночі треба купити електроенергію.";
    }

    energyText.textContent = text;
});

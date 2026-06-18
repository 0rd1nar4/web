// список новин за замовчуванням
const dataNews = [
    {
        id: 1,
        date: "2026-06-01",
        title: "Студенти перемогли у футбольному турнірі",
        text: "Команда університету посіла перше місце у міських студентських змаганнях.",
        img: "img/news/news1.png"
    },
    {
        id: 2,
        date: "2026-06-02",
        title: "Відкрита реєстрація на волейбольну секцію",
        text: "Усі охочі студенти можуть записатися на тренування у спортивному залі.",
        img: "img/news/news2.png"
    },
    {
        id: 3,
        date: "2026-06-03",
        title: "Баскетбольна команда готується до чемпіонату",
        text: "Тренування проходять тричі на тиждень під керівництвом викладача кафедри спорту.",
        img: "img/news/news3.png"
    },
    {
        id: 4,
        date: "2026-06-04",
        title: "Турнір з великого тенісу серед студентів",
        text: "На кортах університету відбулися відбіркові ігри першого етапу.",
        img: "img/news/news4.png"
    },
    {
        id: 5,
        date: "2026-06-05",
        title: "Кіберспортивна команда виграла онлайн-матч",
        text: "Наші студенти показали гарну командну гру та пройшли до наступного раунду.",
        img: "img/news/news5.png"
    },
    {
        id: 6,
        date: "2026-06-06",
        title: "День здоров'я на стадіоні університету",
        text: "Для студентів провели руханку, естафети та короткі спортивні конкурси.",
        img: "img/news/news6.png"
    },
    {
        id: 7,
        date: "2026-06-07",
        title: "Нова форма для збірної університету",
        text: "Спортсмени отримали комплект форми для участі у змаганнях цього сезону.",
        img: "img/news/news7.png"
    },
    {
        id: 8,
        date: "2026-06-08",
        title: "Студентка здобула нагороду у тенісі",
        text: "Представниця університету стала призеркою відкритого студентського турніру.",
        img: "img/news/news8.png"
    },
    {
        id: 9,
        date: "2026-06-09",
        title: "Почалися тренування з легкої атлетики",
        text: "Заняття проводяться на стадіоні у вечірній час для всіх груп.",
        img: "img/news/news9.png"
    },
    {
        id: 10,
        date: "2026-06-10",
        title: "Факультетський кубок з мініфутболу",
        text: "Команди факультетів зіграють за кубок упродовж двох тижнів.",
        img: "img/news/news10.png"
    },
    {
        id: 11,
        date: "2026-06-11",
        title: "Волейболісти провели товариську гру",
        text: "Матч допоміг перевірити склад команди перед важливими зустрічами.",
        img: "img/news/news11.png"
    },
    {
        id: 12,
        date: "2026-06-12",
        title: "Оновлено розклад спортивних секцій",
        text: "На сайті додано актуальні години тренувань для основних секцій.",
        img: "img/news/news12.png"
    },
    {
        id: 13,
        date: "2026-06-13",
        title: "Студенти взяли участь у благодійному забігу",
        text: "Учасники підтримали міську спортивну ініціативу та отримали сертифікати.",
        img: "img/news/news13.png"
    },
    {
        id: 14,
        date: "2026-06-14",
        title: "Нагородження найкращих спортсменів року",
        text: "В університеті відзначили студентів, які активно представляли заклад на змаганнях.",
        img: "img/news/news14.png"
    },
    {
        id: 15,
        date: "2026-06-15",
        title: "Анонс спортивного фестивалю",
        text: "Фестиваль об'єднає секції, показові виступи та дружні матчі.",
        img: "img/news/news15.png"
    }
];

// спортивні секції
let sportList = [
    { name: "Футбол", text: "Тренування та турніри з футболу.", img: "img/sports/football.png" },
    { name: "Волейбол", text: "Командна гра для студентів різних курсів.", img: "img/sports/volleyball.png" },
    { name: "Баскетбол", text: "Секція для новачків та досвідчених гравців.", img: "img/sports/basketball.png" },
    { name: "Великий теніс", text: "Заняття на кортах у теплий сезон.", img: "img/sports/tennis.png" },
    { name: "Кіберспорт", text: "Команда для участі в онлайн-турнірах.", img: "img/sports/esport.png" }
];

// фото для головної сторінки
let galery = [
    { name: "Футбольний матч", img: "img/photos/photo1.png" },
    { name: "Волейбольне тренування", img: "img/photos/photo2.png" },
    { name: "Баскетбольна гра", img: "img/photos/photo3.png" },
    { name: "Нагородження", img: "img/photos/photo6.png" }
];

// розклад подій
let shafa = [
    { date: "18 червня", title: "Фінал з мініфутболу", place: "Стадіон університету" },
    { date: "20 червня", title: "Відкрите тренування з волейболу", place: "Спортивна зала" },
    { date: "22 червня", title: "Кіберспортивний матч", place: "Комп'ютерна аудиторія" },
    { date: "25 червня", title: "День здоров'я", place: "Центральний майданчик" }
];

function getNews() {
    let news = dataNews;
    return news;
}

// адаптивне меню
let btn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

if (btn != null) {
    btn.onclick = function () {
        menu.classList.toggle("open");
    };
}

// простий слайдер
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide() {
    if (slides.length == 0) {
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("show");
}

if (slides.length > 0) {
    setInterval(showSlide, 3500);
}

function showLastNews() {
    let box = document.getElementById("lastNews");
    if (box == null) {
        return;
    }

    let news = getNews();
    box.innerHTML = "";

    for (let i = 0; i < 3 && i < news.length; i++) {
        let item = news[i];
        let card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="text">
                <div class="date">${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `;
        box.appendChild(card);
    }
}

function showSports() {
    let box = document.getElementById("sportBox");
    if (box == null) {
        return;
    }

    box.innerHTML = "";

    for (let i = 0; i < sportList.length; i++) {
        let sport = sportList[i];
        let card = document.createElement("div");
        card.className = "sport-card";
        card.innerHTML = `
            <img src="${sport.img}" alt="${sport.name}">
            <h3>${sport.name}</h3>
            <p>${sport.text}</p>
        `;
        box.appendChild(card);
    }
}

function showPhotoLine() {
    let box = document.getElementById("photoLine");
    if (box == null) {
        return;
    }

    box.innerHTML = "";

    for (let i = 0; i < galery.length; i++) {
        let img = galery[i];
        let card = document.createElement("div");
        card.className = "photo-card";
        card.innerHTML = `
            <img src="${img.img}" alt="${img.name}">
            <p>${img.name}</p>
        `;
        box.appendChild(card);
    }
}

function showEvents() {
    let box = document.getElementById("eventList");
    if (box == null) {
        return;
    }

    box.innerHTML = "";

    for (let i = 0; i < shafa.length; i++) {
        let item = shafa[i];
        let card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <div class="event-date">${item.date}</div>
            <div>
                <h3>${item.title}</h3>
                <p>${item.place}</p>
            </div>
        `;
        box.appendChild(card);
    }
}

showLastNews();
showSports();
showPhotoLine();
showEvents();

/*
Пояснення: файл main.js містить основні дані сайту, меню, слайдер,
показ останніх новин, спортивних секцій, фото і найближчих подій.
*/

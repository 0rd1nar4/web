// показати всі новини
function showNews() {
    let box = document.getElementById("newsBox");
    let news = getNews();

    box.innerHTML = "";

    for (let i = 0; i < news.length; i++) {
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

showNews();

/*
Пояснення: файл news.js бере демонстраційні новини і показує їх на сторінці news.html.
Кожна новина виводиться у вигляді окремої картки.
*/

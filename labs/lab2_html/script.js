// простий калькулятор
let shafa = document.createElement("div");
document.body.appendChild(shafa);

shafa.style.width = "320px";
shafa.style.margin = "40px auto";
shafa.style.padding = "20px";
shafa.style.background = "white";
shafa.style.border = "1px solid #b8c7dc";
shafa.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";

let title = document.createElement("h1");
title.textContent = "Калькулятор";
title.style.textAlign = "center";
title.style.color = "#064b9b";
shafa.appendChild(title);

let screen = document.createElement("input");
screen.type = "text";
screen.readOnly = true;
screen.value = "";
screen.style.width = "100%";
screen.style.boxSizing = "border-box";
screen.style.padding = "12px";
screen.style.fontSize = "22px";
screen.style.marginBottom = "15px";
screen.style.textAlign = "right";
shafa.appendChild(screen);

let buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
];

let menu = document.createElement("div");
menu.style.display = "grid";
menu.style.gridTemplateColumns = "repeat(4, 1fr)";
menu.style.gap = "8px";
shafa.appendChild(menu);

for (let i = 0; i < buttons.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = buttons[i];
    btn.style.padding = "14px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.style.border = "1px solid #9bb0c8";

    if (buttons[i] == "=") {
        btn.style.gridColumn = "1 / 5";
        btn.style.background = "#064b9b";
        btn.style.color = "white";
    } else if (buttons[i] == "C") {
        btn.style.background = "#f4c20d";
    } else {
        btn.style.background = "#f7f9fc";
    }

    btn.addEventListener("click", function () {
        let text = this.textContent;

        if (text == "C") {
            screen.value = "";
        } else if (text == "=") {
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                screen.value = "Помилка";
            }
        } else {
            screen.value = screen.value + text;
        }
    });

    menu.appendChild(btn);
}

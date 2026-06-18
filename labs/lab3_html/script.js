let result = document.getElementById("result");

function print(text) {
    result.textContent = text;
    console.log(text);
}

function seconds(total) {
    return total % 60;
}

function perimeter(side, count) {
    return side * count;
}

function fizzbuzz(n) {
    let text = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            text += "fizzbuzz ";
        } else if (i % 3 == 0) {
            text += "fizz ";
        } else if (i % 5 == 0) {
            text += "buzz ";
        } else {
            text += i + " ";
        }
    }
    return text;
}

function Calculate(a, b, c) {
    return (a + b + c) / 3;
}

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true;
    } else {
        return false;
    }
}

function Add(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}

function Mul(a, b) {
    return a * b;
}

function Div(a, b) {
    if (b == 0) {
        return "На нуль ділити не можна";
    }
    return a / b;
}

function taskSeconds() {
    let total = Number(prompt("Введіть кількість секунд:", "125"));
    print("Залишок від ділення на 60: " + seconds(total));
}

function taskPerimeter() {
    let side = Number(prompt("Довжина сторони:", "5"));
    let count = Number(prompt("Кількість сторін:", "6"));
    print("Периметр: " + perimeter(side, count));
}

function taskFizz() {
    let n = Number(prompt("Введіть n:", "20"));
    print(fizzbuzz(n));
}

function taskAverage() {
    print("Середнє арифметичне 10, 15, 20 = " + Calculate(10, 15, 20));
}

function taskDivisible() {
    let n = Number(prompt("n:", "30"));
    let x = Number(prompt("x:", "3"));
    let y = Number(prompt("y:", "5"));
    print("Число ділиться на x і y: " + isDivisible(n, x, y));
}

function taskArray() {
    let news = [4, 11, 7, 2, 15, 8, 3];
    let min = news[0];
    let max = news[0];
    let sum = 0;
    let odd = [];

    for (let i = 0; i < news.length; i++) {
        if (news[i] < min) min = news[i];
        if (news[i] > max) max = news[i];
        sum += news[i];
        if (news[i] % 2 != 0) odd.push(news[i]);
    }

    let text = "Масив: " + news.join(", ");
    text += "\nМінімум: " + min;
    text += "\nМаксимум: " + max;
    text += "\nСума: " + sum;
    text += "\nСереднє: " + sum / news.length;
    text += "\nНепарні: " + odd.join(", ");
    print(text);
}

function taskMatrix() {
    let shafa = [
        [5, -2, 3, 4, -1],
        [-7, 8, -3, 2, 6],
        [1, -4, 9, -8, 3],
        [4, 2, -6, 7, -5],
        [-1, 3, 2, -9, 4]
    ];

    for (let i = 0; i < 5; i++) {
        if (shafa[i][i] < 0) {
            shafa[i][i] = 0;
        } else {
            shafa[i][i] = 1;
        }
    }

    let text = "";
    for (let i = 0; i < shafa.length; i++) {
        text += shafa[i].join("  ") + "\n";
    }
    print(text);
}

function taskCalc() {
    let a = Number(prompt("Перше число:", "8"));
    let b = Number(prompt("Друге число:", "2"));
    let op = prompt("Операція + - * /", "+");
    let answer;

    if (op == "+") answer = Add(a, b);
    if (op == "-") answer = Sub(a, b);
    if (op == "*") answer = Mul(a, b);
    if (op == "/") answer = Div(a, b);

    print("Результат: " + answer);
}

function taskNumberInfo() {
    let num = Number(prompt("Введіть число:", "30"));
    let text = "";

    if (num >= 0) text += "Число позитивне\n";
    else text += "Число негативне\n";

    let simple = true;
    if (num < 2) simple = false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) simple = false;
    }

    text += "Просте: " + simple + "\n";
    text += "Ділиться на 2: " + (num % 2 == 0) + "\n";
    text += "Ділиться на 3: " + (num % 3 == 0) + "\n";
    text += "Ділиться на 5: " + (num % 5 == 0) + "\n";
    text += "Ділиться на 6: " + (num % 6 == 0) + "\n";
    text += "Ділиться на 9: " + (num % 9 == 0);
    print(text);
}

function taskReverse() {
    let data = [2, "text", 4, 5, "hi"];
    let mainNews = [];

    for (let i = data.length - 1; i >= 0; i--) {
        if (typeof data[i] == "number") {
            mainNews.push(data[i] * data[i]);
        } else {
            mainNews.push(data[i]);
        }
    }

    print("Було: " + data.join(", ") + "\nСтало: " + mainNews.join(", "));
}

function taskUnique() {
    let data = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    let mainNews = [];

    for (let i = 0; i < data.length; i++) {
        if (mainNews.indexOf(data[i]) == -1) {
            mainNews.push(data[i]);
        }
    }

    print("Без дублікатів: " + mainNews.join(", "));
}

let btn = document.getElementById("btn");
let result = document.getElementById("result");

// імітація відповіді сервера для локального запуску
function fakeAjax(number, callback) {
    setTimeout(function () {
        let answer = {
            number: number,
            square: number * number
        };
        callback(answer);
    }, 500);
}

btn.addEventListener("click", function () {
    let number = Number(document.getElementById("number").value);
    result.textContent = "Очікування відповіді...";

    fakeAjax(number, function (data) {
        result.textContent = "Квадрат числа " + data.number + " = " + data.square;
        console.log(data);
    });
});

"use strict";

module.exports = function (a, b) {
    // вывод сообщения
    console.log("Count plus");
    // перевод в формат целых чисел
    a = parseInt(a);
    b = parseInt(b);
    // получение суммы
    const answer = a + b;
    // возврат суммы
    return answer.toString();
};

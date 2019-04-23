"use strict";

module.exports = function (a, b) {
    // вывод сообщения
    console.log("Count minus");
    // перевод в формат целых чисел
    a = parseInt(a);
    b = parseInt(b);
    // получение разности
    const answer = a - b;
    // возврат разности
    return answer.toString();
};

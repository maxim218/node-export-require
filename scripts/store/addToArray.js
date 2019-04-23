"use strict";

// подключение собственного модуля для взаимодействия с массивом элементов
const global = require("./../global");

module.exports = function(elementParam) {
    // вывод сообщения
    console.log("Insert to array");
    // добавляем элемент в конец массива
    const element = elementParam + "";
    global().arr.push(element);
};

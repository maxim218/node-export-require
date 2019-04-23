"use strict";

// подключение собственного модуля для взаимодействия с массивом элементов
const global = require("./../global");

module.exports = function () {
    // вывод сообщения
    console.log("Select array");
    // получаем массив
    const arr = global().arr;
    // преобразуем массив в строку
    const arrayString = JSON.stringify(arr);
    // возвращаем массив в формате строки
    return arrayString.toString();
};

"use strict";

/*
    подключаем собственные модули
*/

// модуль сложения чисел
const plusOperation = require("./operations/plusOperation");
// модуль вычитания чисел
const minusOperation = require("./operations/minusOperation");
// модуль добавления в массив
const addToArray = require("./store/addToArray");
// модуль получения массива
const getArray = require("./store/getArray");

module.exports = function (app) {
    // вывод сообщения
    console.log("Start routing");

    // запрос на получение суммы
    app.get("/api/plus", function (request, response) {
        const a = request.query['a'] + "";
        const b = request.query['b'] + "";
        const ans = plusOperation(a, b);
        response.end(ans);
    });

    // запрос на получение разности
    app.get("/api/minus", function (request, response) {
        const a = request.query['a'] + "";
        const b = request.query['b'] + "";
        const ans = minusOperation(a, b);
        response.end(ans);
    });

    // запрос на добавление в массив
    app.get("/api/insert", function (request, response) {
        const e = request.query["e"] + "";
        addToArray(e);
        response.end("Insert " + e + " OK");
    });

    // запрос на получение массива
    app.get("/api/select", function (request, response) {
        const answer = getArray();
        response.end(answer);
    });
};


"use strict";

// объект для хранения массива элементов
const GLOBAL = {
    arr: []
};

module.exports = function () {
    // возврат ссылки на объект
    return GLOBAL;
};

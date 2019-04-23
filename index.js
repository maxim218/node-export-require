"use strict";

// подключаем собственный модуль маршрутизации
const route = require("./scripts/route");

// запускаем сервер на порте 5000
const express = require("express");
const app = express();
const port = 5000;
app.listen(port);
console.log("Port: " + port);

// вызываем функцию маршрутизации
route(app);

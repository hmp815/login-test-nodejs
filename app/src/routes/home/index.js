"use strict";

const express = require("express");
const router = express.Router();
//rout(/) 경로로 요청이 들어오면 {} 안의 기능을 수행하겠다 
const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login",ctrl.login);

module.exports = router; //외부 파일에서 접근가능하도록
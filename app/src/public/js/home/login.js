"use strict";
// DOM 사용 : DOM -> Document Object Model

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };

    // 어떤 경로로 전달을 할지 정해야함, 서버로 데이터 전달, 서버에 해당 데이터를 받을API가 있어야 함.
    fetch("/login", {
        // POST : /login을 생성 하라 GET : /login을 조회
        method : "POST", 
        //headers : 내가 전달하는 데이터가 어떤 데이터인지 알려주는 역할
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req) // stringify는 문자열로 변환하는 함수
    });  
    //console.log(req);
}
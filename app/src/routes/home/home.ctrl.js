"use strict";

const hello = (req,res) =>{
    
    res.render("home/index");
};

const login = (req, res) =>{

    res.render("home/login");
};

module.exports = { //hello 와 login을 밖으로 내보내기 
    hello,
    login,
};

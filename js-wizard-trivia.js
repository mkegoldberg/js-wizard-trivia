/*
============================================
; Title:  Group Assignment
; Author: Mike Goldberg, Nicole Forke, Ashleigh Lyman
; Date:   25 February 2020
; Description: SPA - JavaScript Trivia Game
;===========================================
*/

// Variable declaration:
var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

// output

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 

// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 

// landing page
app.get("/", function (request, response) {
    response.render("index", {});
});

// copy and past the following for each question
app.get("/question-one", function (request, response) {
    response.render("question-one", {
        question: "Put question here",
        answer: "Answer here",
    });
});

// start local
http.createServer(app).listen(8080);

// end program

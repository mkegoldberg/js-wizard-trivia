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

var logger = require("morgan");

var app = express();

// output

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

// landing page
app.get("/", function (request, response) {
  response.render("index", {});
});

// copy and past the following for each question
app.get("/question-one", function (request, response) {
  response.render("question-one", {
    question: "Which one of these is not a JavaScript data type?",
    correctAnswer: "c",
  });
});

app.get("/question-two", function (request, response) {
  response.render("question-two", {
    question: "The following is a symbol for a comment in Javascript, ‘//’",
    correctAnswer: "a",
  });
});

app.get("/question-three", function (request, response) {
  response.render("question-three", {
    question: "What will this line of text perform in Javascript, ‘console.log()’?",
    correctAnswer: "c",
  });
});

app.get("/question-four", function (request, response) {
  response.render("question-four", {
    question: "JavaScript is case-sensitive?",
    correctAnswer: "a",
  });
});

app.get("/question-five", function (request, response) {
  response.render("question-five", {
    question: "Which symbols/characters create an array?",
    correctAnswer: "a",
  });
});

app.get("/question-six", function (request, response) {
  response.render("question-six", {
    question: "What is a local variable?",
    correctAnswer: "a",
  });
});

app.get("/question-seven", function (request, response) {
  response.render("question-seven", {
    question: "Which term is used to convert one data type to another?",
    correctAnswer: "b",
  });
});

app.get("/question-eight", function (request, response) {
  response.render("question-eight", {
    question: "JavaScript has two types of functions, named or literal",
    correctAnswer: "b",
  });
});

app.get("/question-nine", function (request, response) {
  response.render("question-nine", {
    question: "JavaScript is a scripting language and an object-oriented programming language?",
    correctAnswer: "a",
  });
});

app.get("/question-ten", function (request, response) {
  response.render("question-ten", {
    question: "Which company developed JavaScript?",
    correctAnswer: "b",
  });
});


// start local
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});

// end program

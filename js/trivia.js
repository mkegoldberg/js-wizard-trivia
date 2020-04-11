// JavaScript for Trivia Game
function logTest() {
  console.log("Connected!");
}
logTest();

// global variables
var triviaKey = [
  {
    question: "Which one of these is not a JavaScript data type?",
    options: [
      { letter: "A", text: "Boolean" },
      { letter: "B", text: "String" },
      { letter: "C", text: "Loop" },
      { letter: "D", text: "Undefined" },
    ],
    answer: "C",
  },
  {
    question: "The following is a symbol for a comment in Javascript, ‘//’",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" },
    ],
    answer: "A",
  },
  {
    question: "What will this line of text perform in Javascript, ‘console.log()’?",
    options: [
      { letter: "A", text: "Input keyed information into database" },
      { letter: "B", text: "Display keyed information to user" },
      { letter: "C", text: "Retrieve requested information and display" },
      { letter: "D", text: "Creates and logs keyed variables" },
    ],
    answer: "C",
  },
  {
    question: "JavaScript is case-sensitive?",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" },
    ],
    answer: "A",
  },
  {
    question: "Which symbols/characters create an array?",
    options: [
      { letter: "A", text: "[ ]" },
      { letter: "B", text: "&&" },
      { letter: "C", text: "{}" },
      { letter: "D", text: "/* */" },
    ],
    answer: "A",
  },
  {
    question: "What is a local variable?",
    options: [
      { letter: "A", text: "a variable that is only visible within a function where it’s defined" },
      { letter: "B", text: "a variable in a function that stores other variables" },
      { letter: "C", text: "a variable that is visible anywhere in the program" },
      { letter: "D", text: "a variable that is declared with no value" },
    ],
    answer: "A",
  },
  {
    question: "Which term is used to convert one data type to another?",
    options: [
      { letter: "A", text: "Action" },
      { letter: "B", text: "Parse" },
      { letter: "C", text: "Hash" },
      { letter: "D", text: "Value" },
    ],
    answer: "B",
  },
  {
    question: "JavaScript has two types of functions, named or literal",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" },
    ],
    answer: "B",
  },
  {
    question: "JavaScript is a scripting language and an object-oriented programming language?",
    options: [
      { letter: "A", text: "True" },
      { letter: "B", text: "False" },
    ],
    answer: "A",
  },
  {
    question: "Which company developed JavaScript?",
    options: [
      { letter: "A", text: "Net Solutions" },
      { letter: "B", text: "Netscape" },
      { letter: "C", text: "Internet Explorer" },
      { letter: "D", text: "ARAPANET" },
    ],
    answer: "B",
  },
]

// View Model
function TriviaViewModel() {
  var self = this

  // bindings
  this.currentView = ko.observable("home");
  this.questionNumber = ko.observable(0);
  this.currentQuestion = ko.observable(triviaKey[this.questionNumber]);
  this.totalCorrectAnswers = ko.observable(0);

   // Actions
  self.changeView = function (newView) {
    self.currentView = newView;
  }

  self.changeQuestionForward = function () {
    // is answer selected?
      // no => Add warning
      // yes => this.questionNumber() + 1;
  }

  self.changeQuestionBackward = function () {
    // this.questionNumber() - 1;
  }

  self.storeAnswer = function (answer) {
    // add 'selected' class to the selected answer
    // add property to object stating if correct or store their answer
    // if changing answer => remove class previous selected answer
    // if correct answer => this.totalCorrectAnswers + 1
    // if changing correct answer to incorrect => this.totalCorrectAnswers - 1
  }
}

ko.applyBindings(new TriviaViewModel());

//TODO Make classes for employee and for each role that extend employee
//TODO MAke tests for each method?
//TODO Make inquirer questions to the user
//TODO Put the input answer in new classes
//TODO Pass the input answers and give them a format (html file)
//TODO Write the html file in a specific location so it can be displayed to the user

const inquirer = require("inquirer");
const fs = require("fs");

const allData = []

//Questions arrays
const basicQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is his/her name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is his/her ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is his/her email?",
  },
  {
    type: "list",
    name: "options",
    message: "Choose the next team member to input his/her information, or finnish and generate your team profile cards",
    choices: [
      "Engineer",
      "Intern",
      "finish, and generate profile cards",
    ],
  },
];
const managerQuestions = [
  {
    type: "input",
    name: "managerOffice",
    message: "What is your team manager’s office number?",
  }
]
const engineerQuestions = [
  {
    type: "input",
    name: "enginnerGithub",
    message: "What is your engineer’s GitHub username?",
  }
]
const internQuestions = [
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern’s school?",
  }
]

//Prompt questions functions
async function promptManagerQuestions() {
  try {
    console.log("Welcome, and please answer the following questions so we can generate your team member's profile cards.")
    console.log("Please input your team manager's information")
    const response = await inquirer.prompt([...basicQuestions, ...managerQuestions])
    storeInputAnswers(response)
    sendToNextQuestion(response.options)
  }
  catch (err) {
    console.log(err);
  }
}
async function promptEngineerQuestions() {
  try {
    console.log("Please input your engineer's information")
    const response = await inquirer.prompt([...basicQuestions, ...engineerQuestions ])
    storeInputAnswers(response)
    sendToNextQuestion(response.options)
  }
  catch (err) {
    console.log(err);
  }
}
async function promptInternQuestions() {
  try {
    console.log("Please input your team manager's information")
    const response = await inquirer.prompt([...basicQuestions, ...internQuestions ])
    storeInputAnswers(response)
    sendToNextQuestion(response.options)
  }
  catch (err) {
    console.log(err);
  }
}

//Traverse through different and response data storage functions
function sendToNextQuestion(options) {
  if (options === "Engineer") promptEngineerQuestions();
  if (options === "Intern") promptInternQuestions();
  if (options === "finish, and generate profile cards") generateCards();
  
}
function storeInputAnswers(data) {
  allData.push(data)
}
//Generate cards html
function generateCards() { //Maybe this goes in a  new file?
  console.log(allData)
} 

//Initialize Index.js function
function init() {
  promptManagerQuestions()
}

init();

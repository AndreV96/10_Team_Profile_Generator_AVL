//TODO Make classes for employee and for each role that extend employee
//TODO MAke tests for each method?
//TODO Make inquirer questions to the user
//TODO Put the input answer in new classes
//TODO Pass the input answers and give them a format (html file)
//TODO Write the html file in a specific location so it can be displayed to the user

const inquirer = require("inquirer");
const fs = require("fs");
const { choices } = require("yargs");

const question = [
  {
    type: "input",
    name: "managerName",
    message: "What is your team manager’s name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your team manager’s ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your team manager’s email?",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "What is your team manager’s office?",
  },
  {
    type: "list",
    name: "options",
    message: "Choose one of the following options",
    choices: [
      "Add an engineer to your team",
      "Add a intern to your team",
      "Finish building your team",
    ],
  },
  {
    type: "input",
    name: "enginnerGithub",
    message: "What is your engineer’s GitHub username?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern’s school?",
  },
];

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const generateHtml = require("./utils/generatehtml.js");
const inquirer = require("inquirer");
const fs = require("fs");

const allData = [];

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
    message:
      "Choose the next team member to input his/her information, or finnish and generate your team profile cards",
    choices: ["Engineer", "Intern", "finish, and generate profile cards"],
  },
];
const managerQuestions = [
  {
    type: "input",
    name: "office",
    message: "What is your team manager’s office number?",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is your engineer’s GitHub username?",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "What is your intern’s school?",
  },
];

//Prompt questions functions
async function promptManagerQuestions() {
  try {
    console.log(
      "Welcome, and please answer the following questions so we can generate your team member's profile cards."
    );
    console.log("Please input your team manager's information");
    const response = await inquirer.prompt([
      ...managerQuestions,
      ...basicQuestions,
    ]);
    const manager = new Manager(response);
    storeInputAnswers(manager);
    sendToNextQuestion(response.options);
  } catch (err) {
    console.log(err);
  }
}
async function promptEngineerQuestions() {
  try {
    console.log("Please input your engineer's information");
    const response = await inquirer.prompt([
      ...engineerQuestions,
      ...basicQuestions,
    ]);
    const engineer = new Engineer(response);
    storeInputAnswers(engineer);
    sendToNextQuestion(response.options);
  } catch (err) {
    console.log(err);
  }
}
async function promptInternQuestions() {
  try {
    console.log("Please input your team manager's information");
    const response = await inquirer.prompt([
      ...internQuestions,
      ...basicQuestions,
    ]);
    const intern = new Intern(response);
    storeInputAnswers(intern);
    sendToNextQuestion(response.options);
  } catch (err) {
    console.log(err);
  }
}

//Traverse through different and response data storage functions
function sendToNextQuestion(options) {
  if (options === "Engineer") promptEngineerQuestions();
  if (options === "Intern") promptInternQuestions();
  if (options === "finish, and generate profile cards") writeIndexFile();
}
function storeInputAnswers(data) {
  allData.push(data);
}
//Generate cards html
function writeIndexFile() {
  fs.writeFileSync("./dist/index.html", generateHtml(allData));
}

//Initialize Index.js function
function init() {
  promptManagerQuestions();
}

init();

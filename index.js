const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const promptUser = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project about?'
        },
        {
            type: 'input'
        }
    ])
}

// array of questions for user
const questions = ['What is the title of your project?', 'What is your project about?', 'What are your installation requirements?', 'How do use this application?', 'What license would you like to use?', 'Are you open to contributions?(If you are, please provide your requirements)', 'What command will run your test?', 'Enter your GitHub username.', 'Enter a valid email for your users to reach you.' ];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  console.log("Hello!");
  
}

// function call to initialize program
init();

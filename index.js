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
        }
    ])
}

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  console.log("Hello!");
  
}

// function call to initialize program
init();

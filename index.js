const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = ['What is the title of your project?', 'What is your project about?', 'What are your installation requirements?', 'How do use this application?', 'What license would you like to use?', 'Are you open to contributions?(If you are, please provide your requirements)', 'What command will run your test?', 'Enter your GitHub username.', 'Enter a valid email for your users to reach you.' ];

const promptUser = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: [6]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: [
                'A',
                'B',
                'C',
                'D'
            ]
        },
        {
            type: 'input',
            name: 'githubUser',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8]
        }
    ]);
}

// function to write README file
function generateReadMe(Answers) {

}

// function to initialize program
async function init() {
  console.log('Hello!');
  try{
      const answers = await promptUser();
      const readme = generateReadMe(answers);
      await writeFileAsync("README.md", readme);
      console.log('Successfully Wrote README.md!');
  } catch(err){
      console.log(err);
  };
  
}

// function call to initialize program
init();

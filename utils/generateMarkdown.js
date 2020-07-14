// function to generate markdown for README
function generateMarkdown(answers) {
  return ` # ${answers.title}
  ${answers.description}
 ## Installing
 ${answers.installation}
 ## Usage
 ${answers.usage}
 ## Contributions
 ${answers.contribution}
 ## Tests
 ${answers.testInstructions}
 ## License
 ${answers.license}
 ## Questions
 ${answers.githubUser}
 ${answers.email}
`;
}

module.exports = generateMarkdown;

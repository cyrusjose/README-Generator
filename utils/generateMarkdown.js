function assignBadge(choice){
  if(choice === "Apache License 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (choice === "BSD 3-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else if (choice === "BSD 2-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }
  else if (choice === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  let badges = assignBadge(choice);
  return ` # ${answers.title}
  ${answers.description}
 ## Installing
 ${answers.installation}
 ## Usage
 ${answers.usage}
 ## Contributions
 ${answers.contribution}
 ## Tests
 Here is the code to run the test
 ${'```'}
 ${answers.testInstructions}
 ${'```'}
 ## License
 ${badges()}
 ## Questions
 If you have any further questions please feel free to reach out to me at any of the following: ${'\n'}
 github.com/${answers.githubUser}
 ${answers.email}
`;
}

module.exports = generateMarkdown;

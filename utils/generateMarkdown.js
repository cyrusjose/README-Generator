
// function to generate markdown for README
function generateMarkdown(answers) {
  function assignBadge(){
    if(answers.license === "Apache License 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (answers.license === "BSD 3-Clause"){
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    else if (answers.license === "BSD 2-Clause"){
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    }
    else {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
  }

  function chosenLicence(){
    if(answers.license === "Apache License 2.0"){
      return "https://opensource.org/licenses/Apache-2.0";
    }
    else if (answers.license === "BSD 3-Clause"){
      return "https://opensource.org/licenses/BSD-3-Clause";
    }
    else if (answers.license === "BSD 2-Clause"){
      return "https://opensource.org/licenses/BSD-2-Clause";
    }
    else {
      return "https://opensource.org/licenses/MIT";
    }
  }
  return ` # ${answers.title + assignBadge(answers.license)}
 ## Description
 ${answers.description}
 ## Table of Contents
 <!--ts-->
  * [Installing](#${answers.installation})
  * [Usage](#${answers.usage})
  * [Contributions](#${answers.contribution})
  * [Tests](#${answers.testInstructions})
  * [License](#${answers.license})
  * [Questions](#Questions)
 <!--te-->
 ## Installing
 Installation requirement(s) [Add more as necessary]: 
 * ${answers.installation}
 ## Usage
 ${answers.usage}
 ## Contributions
 ${answers.contribution}
 ## Tests
 Here is the code to run a test.
 ${'```'}
 ${answers.testInstructions}
 ${'```'}
 ## License
 The chosen license for this application is ${answers.license}. Please follow the link below for more imformation about the license.
 * ${chosenLicence(answers.license)}
 ## Questions
 If you have any further questions please feel free to reach out to me at any of the following: ${'\n'}
 * https://github.com/${answers.githubUser}
 * ${answers.email}
`
}

module.exports = generateMarkdown;

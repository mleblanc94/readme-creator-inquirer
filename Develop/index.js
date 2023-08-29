// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions to be included in the README:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information to be included within the README:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter any contribution guidelines to be included in the README:'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter any test instructions to be included within the README:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license for your application:',
        choices: ['MIT License', 'Apache 2.0 License', 'General Purpose License 3.0', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
];

// if (license === 'MIT License')
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
        } else {
            console.log('README file was created successfully')
        }
    })
} 
let licenseImage;
// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions)
      .then(answers => {
        
        switch (answers.license) {
            case 'MIT License':
                licenseImage = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                break;
            case 'Apache 2.0 License':
                licenseImage = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                break;
            case 'General Purpose License 3.0':
                licenseImage = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                break;
            case 'Mozilla Public License 2.0':
                licenseImage = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                break;
        }
        const readMe = ({ title, description, installation, usage, guidelines, instructions, license, github, email }) => 
    `# ${title}

${licenseImage}

## Table of Contents
    
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Description
    
${description}
    
## Installation 
    
${installation}
    
## Usage
    
${usage}
    
## License
    
${license}
    
## Contributing 
    
${guidelines}
    
## Tests
    
${instructions}
    
## Questions
    
- What is the link to my GitHub profile? 
      Github Profile: https://github.com/${github}
    
- How can I reach out to you if I have additional questions?
      The best way to reach me is by emailing me at ${email}
`;
        const generateReadMe = readMe(answers)
    writeToFile('./generated-files/README.md', generateReadMe)
      })
}

// Function call to initialize app
init();

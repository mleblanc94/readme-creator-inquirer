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
        message: 'Please provide a description for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions to be included in the README'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information to be included within the README'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter any contribution guidelines to be included in the README'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter any test instructions to be included within the README'
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
        message: 'Please enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile('README.md', data) {
    console.log("README has been created with the information the user provided")
}
.catch((error) => {
    console.log("Error:" + error);
})

// TODO: Create a function to initialize app
function init() {
    const generateReadMe = ({ title, description, installation, usage, guidelines, instructions, license, github, email }) => 
    `# ${title}

    ## ${}

    `
}

// Function call to initialize app
init();

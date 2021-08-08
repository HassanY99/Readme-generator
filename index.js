// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const filesName = './utils/generateREADME.md';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Choose one of the following licensing;',
        name: 'licensing',
        choices: ["Apache", "MIT", "MozillaPublic", "GNUGeneralPublic", "None"]
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who is contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please show a test.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'List of Acknowledgments;',
        name: 'acknowledgments',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeREADME(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("Success!");
    })
}

inquirer
.prompt(questions)
.then((data) => writeREADME(filesName, data))
.catch((err) => {
    if (err.isTtyError) {
        console.log(err);
    } else {
        console.log(err);
    }
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // https://www.npmjs.com/package/inquirer
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List of collaborators, if any, and their GitHub username/URLs:'
    },
    {
        type: 'input',
        name: 'badges',
        message: 'List any badges you would like to include:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'AFL-3.0',
            'Apache-2.0',
            'Artistic-2.0',
            'BSL-1.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-3-Clause-Clear',
            'BSD-4-Clause',
            '0BSD',
            'CC',
            'CC0-1.0',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'WTFPL',
            'ECL-2.0',
            'EPL-1.0',
            'EPL-2.0',
            'EUPL-1.1',
            'AGPL-3.0',
            'GPL',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL',
            'LGPL-2.1',
            'LGPL-3.0',
            'ISC',
            'LPPL-1.3c',
            'MS-PL',
            'MIT',
            'MPL-2.0',
            'OSL-3.0',
            'PostgreSQL',
            'OFL-1.1',
            'NCSA',
            'Unlicense',
            'Zlib'
        ],
        default: 'MIT'
        filter: function(val) {
            return val.toLowerCase();
        },
        validate: function(val) {
            return val !== '';
        },
        when: function(answers) {
            return answers.license === 'other';
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
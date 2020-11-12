const inquirer = require('inquirer'); 
const fs = require('fs'); 
const path = require('path'); //path module provides utilities for working with file and directory PATHS.
const generateMarkdown = require('./generateMarkdown.js');

const questions = [
  {
    type: 'input',
    name: 'repo',
    message: 'What is the name of your repository?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install?',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Examples of usage:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter which license was used:',
    choices: ["MIT", "BSD", "Apache", "Boost", "Mozilla", "IBM", "ISC", "Perl", "Unlicense"],
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'How do you accept a contribution?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run a test?',
    default: 'npm run test',
  },
  {
    //this is going to be for SUPPORT section
    type: 'input',
    name: 'github',
    message: 'Enter your Github username:',
  },
  {
    //this is going to be for SUPPORT section
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
  },
  {
    //this is going to be for SUPPORT section
    type: 'input',
    name: 'questions',
    message: 'What is the best way developers can reach you with additional questions?',
  },
];

const init = () =>
  inquirer.prompt(questions)
    .then((response) => {
      console.log('Successfully wrote to ReadMe.md');
      fs.writeFileSync(path.join(process.cwd(), 'new_readme.md'), generateMarkdown(response));
    })

init();

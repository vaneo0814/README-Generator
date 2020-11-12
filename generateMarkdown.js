// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![${data.license}](https://img.shields.io/badge/${data.license}-v1-brightgreen.svg)
  
## Description
${data.description}
  
  
### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Support](#support)
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
## License 
${data.license}
  
## Contributions
${data.contributions}
  
## Tests
${data.tests}
  
## Support
**Github:** [${data.github}](https://github.com/${data.github}?tab=repositories)
  
  
**Email: ${data.email}** 

${data.questions}
`;
}

module.exports = generateMarkdown;
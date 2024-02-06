// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license=== 'None') {
        return ''
    }
    return `## License
This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Badges](#badges)

## Installation
* ${data.installation}

## Usage
* ${data.usage}

## Credits
* ${data.credits}

${renderLicenseSection(data.license)}, ${renderLicenseLink(data.license)}

## Badges
* ${data.badges}

## Features
* ${data.features}

## Contributing
* ${data.contributing}

## Tests
* ${data.tests}

## Questions
* If you have any questions, you can reach me at ${data.email} or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).

## Generated README.md was created by @CWOChris
`;
}

module.exports = generateMarkdown;

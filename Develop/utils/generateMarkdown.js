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
    return `## :key: License
This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## :ledger: Description
${data.description}

## :bookmark_tabs: Table of Contents
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

## :hourglass: Installation
* ${data.installation}

## :arrows_counterclockwise: Usage
* ${data.usage}

## :clapper: Credits
* ${data.credits}

${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

## :name_badge: Badges
* ${data.badges}

## :mag: Features
* ${data.features}

## :muscle: Contributing
* ${data.contributing}

## :card_index: Tests
* ${data.tests}

## :interrobang: Questions
* If you have any questions, you can reach me at ${data.email} or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).

## :copyright: README.md created by @CWOChris
`;
}

module.exports = generateMarkdown;

function renderLicenseBadge(license) {
    if (license.name=='') {
        return '';
    } else {
        return `[![License: ${license.shortname}](${license.badge})](${license.link})`;
    }
}


function renderLicenseLink(license) {
    return `[${license.name}](${license.link})`;
}


function renderLicenseSection(license) {
    if (license.name == '') {
        return '';
    } else {
        return `
## License
This is covered by the ${renderLicenseLink(license)}
`;
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing Instructions](#testing-instructions)
* [Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.install}

## Usage Information
${data.usage}
${renderLicenseSection(data.license)}
## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.test}

## Questions
See [GitHub](github.com/${data.username}) for more information and other projects

Contact me at ${data.email} with other questions
`;
}

module.exports = generateMarkdown;
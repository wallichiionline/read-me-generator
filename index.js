const generateMarkdown = require("./utils/generateMarkdown");

const licenses = [
    {
        name: 'No license',
        value: {
            name: '',
            shortname: '',
            link: '',
            badge: ''
        }
    },
    {
        name: 'Apache 2.0 License',
        value: {
            name: 'Apache 2.0 License',
            shortname: 'Apache 2.0',
            link: 'https://opensource.org/licenses/Apache-2.0',
            badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
        }
    },
    {
        name: 'Boost Software License 1.0',
        value: {
            name: 'Boost Software License 1.0',
            shortname: 'Boost 1.0',
            link: 'https://www.boost.org/LICENSE_1_0.txt',
            badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
        }
    },
    {
        name: 'BSD 3-Clause License',
        value: {
            name: 'BSD 3-Clause License',
            shortname: 'BSD 3-Clause',
            link: 'https://opensource.org/licenses/BSD-3-Clause',
            badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
        }
    },
    {
        name: 'Creative Commons',
        value: {
            name: 'Creative Commons',
            shortname: 'CC0 1.0',
            link: 'http://creativecommons.org/publicdomain/zero/1.0/',
            badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg'
        }
    },
    {
        name: 'Eclipse Public License 1.0',
        value: {
            name: 'Eclipse Public License 1.0',
            shortname: 'EPL 1.0',
            link: 'https://opensource.org/licenses/EPL-1.0',
            badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
        }
    },
    {
        name: 'GNU GPL v3',
        value: {
            name: 'GNU GPL v3',
            shortname: 'GPLv3',
            link: 'https://www.gnu.org/licenses/gpl-3.0',
            badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
        }
    },
    {
        name: 'GNU AGPL v3',
        value: {
            name: 'GNU AGPL v3',
            shortname: 'AGPL v3',
            link: 'https://www.gnu.org/licenses/agpl-3.0',
            badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg'
        }
    },
    {
        name: 'GNU LGPL v3',
        value: {
            name: 'GNU LGPL v3',
            shortname: 'LGPL v3',
            link: 'https://www.gnu.org/licenses/lgpl-3.0',
            badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg'
        }
    },
    {
        name: 'GNU FDL v1.3',
        value: {
            name: 'GNU FDL v1.3',
            shortname: 'FDL v1.3',
            link: 'https://www.gnu.org/licenses/fdl-1.3',
            badge: 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg'
        }
    },
    {
        name: 'The Hippocratic License 3.0',
        value: {
            name: 'The Hippocratic License 3.0',
            shortname: 'Hippocratic 3.0',
            link: 'https://firstdonoharm.dev',
            badge: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg'
        }
    },
    {
        name: 'IBM Public License Version 1.0',
        value: {
            name: 'IBM Public License Version 1.0',
            shortname: 'IPL 1.0',
            link: 'https://opensource.org/licenses/IPL-1.0',
            badge: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
        }
    },
    {
        name: 'ISC License',
        value: {
            name: 'ISC License',
            shortname: 'ISC',
            link: 'https://opensource.org/licenses/ISC',
            badge: 'https://img.shields.io/badge/License-ISC-blue.svg'
        }
    },
    {
        name: 'The MIT License',
        value: {
            name: 'The MIT License',
            shortname: 'MIT',
            link: 'https://opensource.org/licenses/MIT',
            badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
        }
    },
    {
        name: 'Mozilla Public License 2.0',
        value: {
            name: 'Mozilla Public License 2.0',
            shortname: 'MPL 2.0',
            link: 'https://opensource.org/licenses/MPL-2.0',
            badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
        }
    },
    {
        name: 'Attribution License (BY)',
        value: {
            name: 'Attribution License (BY)',
            shortname: 'ODC BY',
            link: 'https://opendatacommons.org/licenses/by/',
            badge: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg'
        }
    },
    {
        name: 'Open Database License (ODbL)',
        value: {
            name: 'Open Database License (ODbL)',
            shortname: 'ODbL',
            link: 'https://opendatacommons.org/licenses/odbl/',
            badge: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg'
        }
    },
    {
        name: 'Public Domain Dedication and License (PDDL)',
        value: {
            name: 'Public Domain Dedication and License (PDDL)',
            shortname: 'PDDL',
            link: 'https://opendatacommons.org/licenses/pddl/',
            badge: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg'
        }
    },
    {
        name: 'The Perl License',
        value: {
            name: 'The Perl License',
            shortname: 'Perl',
            link: 'https://opensource.org/licenses/Artistic-2.0',
            badge: 'https://img.shields.io/badge/License-Perl-0298c3.svg'
        }
    },
    {
        name: 'The Artistic License 2.0',
        value: {
            name: 'The Artistic License 2.0',
            shortname: 'Artistic 2.0',
            link: 'https://opensource.org/licenses/Artistic-2.0',
            badge: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg'
        }
    },
    {
        name: 'SIL Open Font License 1.1',
        value: {
            name: 'SIL Open Font License 1.1',
            shortname: 'OFL 1.1',
            link: 'https://opensource.org/licenses/OFL-1.1',
            badge: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg'
        }
    },
    {
        name: 'The Unlicense',
        value: {
            name: 'The Unlicense',
            shortname: 'Unlicense',
            link: 'http://unlicense.org/',
            badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
        }
    },
    {
        name: 'The zlib/libpng License',
        value: {
            name: 'The zlib/libpng License',
            shortname: 'Zlib',
            link: 'https://opensource.org/licenses/Zlib',
            badge: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg'
        }
    }
];
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions:'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What license is the application covered under?',
        choices: licenses
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:'
    }
];


function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if(err) {
            return console.log(err);
        }
        console.log("The README was created");
    });
}

function init() {
    const inquirer = require("inquirer");
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(`${answers.title}.md`, answers);
        })
        .catch((error) => {
            if(error.isTtyError) {
                console.log(error);
            } else {
                console.log(error);
            }
        });
}

// Function call to app
init();
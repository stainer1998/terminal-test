const inquirer = require("inquirer");
const inquirerFileTreeSelection = require("inquirer-file-tree-selection-prompt");
const fs = require("fs");

inquirer.registerPrompt("file-tree-selection", inquirerFileTreeSelection);

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Type your file name (without extension)"
  },
  {
    type: "input",
    name: 'extension',
    message: "Type the extension file"
  },
  {
    type: "file-tree-selection",
    name: "fileDirectory",
  }
]).then((answers) => {
    const {name, extension, fileDirectory} = answers
    fs.createWriteStream(`${fileDirectory}/${name}.${extension}`)
})

const inquirer = require("inquirer");
const fs = require("fs");
const os = require("os");
const inquirerFileTreeSelection = require("inquirer-file-tree-selection-prompt");

var ui = new inquirer.ui.BottomBar();

inquirer.registerPrompt("file-tree-selection", inquirerFileTreeSelection);

inquirer
  .prompt([
    {
      type: "file-tree-selection",
      name: "file",
    },
  ])
  .then(async (answers) => {
    
    await fs.stat(answers.file, (error, stats) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(answers);
      stats.isDirectory()
        ? console.log("It's a directory")
        : console.log("It's a file");
    });
  });

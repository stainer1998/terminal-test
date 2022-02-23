const inquirer = require("inquirer");
const inquirerFileTreeSelection = require("inquirer-file-tree-selection-prompt");
const fs = require("fs");
const path = require("path");

inquirer.registerPrompt("file-tree-selection", inquirerFileTreeSelection);

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Type the directory name"
    },
    {
        type: "file-tree-selection",
        root: "/",
        name: "folder"
    }
]).then(async (answers) => {

    const { folder, name } = answers

    await fs.stat(answers.folder, (error, stats) => {
        if (error) {
          console.error(error);
          return;
        }

        if(stats.isDirectory()){
            const pathFolder = path.join(folder, name)
            if(!fs.existsSync(pathFolder)){
                fs.mkdirSync(pathFolder, { recursive: true});
            } else{
                console.log('This folder already exists')
            }
        } else{
            console.log("Sorry, you can't create a directory here, it's a file");
        }
          
      });

})
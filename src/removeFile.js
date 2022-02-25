const inquirer = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');
const fs = require('fs');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

inquirer.prompt([
    {
        type: "file-tree-selection",
        name: "fileDirectory"
    }
]).then(({fileDirectory}) => {
    console.log(fileDirectory);
    fs.rm(fileDirectory, {recursive:true}, (err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log("File was deleted successfully")
    })
})

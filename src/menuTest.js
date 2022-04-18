const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");


var options = []

var files = fs.readdirSync(__dirname);

const fillArray = async () => {
    files.forEach((file) => {
        fs.stat(file, (error, stats) => {
            if(error){
                console.error(error);
                return;
            }
            stats.isFile()
            ? options.push(file)
            :console.log('dir')
        })
    })
    console.log(options)
}

fillArray();


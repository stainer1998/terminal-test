const  { exec } = require("child_process");


exec(`tree ${__dirname}`, (error, stdout, stderr) => {
    if(error){
        console.log(`error: ${error.message}`);
        return;
    }

    if(stderr){
        console.log(`error: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`)
})
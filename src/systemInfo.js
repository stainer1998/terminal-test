#!/usr/bin/env node
const os = require("os");
const si = require("systeminformation");
const { formatBytes } = require("./helper/formatBytes.js")
const nodeDiskInfo = require('node-disk-info');


console.log('Total Memory: '+ formatBytes(os.totalmem()));
console.log('Free Memory: '+ formatBytes(os.freemem()));
console.log('Operative System: ' + os.release());
console.log('Current directory:' + process.cwd());

try {
    const disks = nodeDiskInfo.getDiskInfoSync();
    printResults('Disk Info', disks);
} catch (e) {
    console.error(e);
}

/* si.cpuTemperature()
    .then(data => console.log(`CPU Temperature: ${data.main} °C`))
    .catch(error => console.error(error));

si.users()
    .then(data => console.log('user:' + data[0].user))
    .catch(error => console.error(error));

si.bios()
    .then(data => console.log('bios: ' + data.version))
    .catch(error => console.error(error));

si.baseboard()
    .then(data => console.log('baseboard: ' + data.version))
    .catch(error => console.error(error));

si.chassis()
    .then(data => console.log('chasis: '+ data.version))
    .catch(error => console.error(error))

si.graphics()
    .then(data => console.log(data.displays))
    .catch(error => console.error(error))

si.networkConnections()
    .then(data => console.log(data))
    .catch(error => console.error(error))

si.fsSize()
    .then(data => console.log(data))
    .catch(error => console.error(error))

si.shell()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.audio()
    .then(data => console.log(data))
    .catch(error => console.error(error))
    
 */
function printResults(title, disks) {

    console.log(`============ ${title} ==============\n`);

    for (const disk of disks) {
        console.log('Filesystem:',disk.filesystem);
        console.log('Blocks:', formatBytes(disk.blocks));
        console.log('Used:', formatBytes(disk.used));
        console.log('Available:', formatBytes(disk.available));
        console.log('Capacity:', disk.capacity);
        console.log('Mounted:', disk.mounted, '\n');
    }

}
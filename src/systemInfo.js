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
    //printResults('Disk Info', disks);
} catch (e) {
    console.error(e);
}

si.wifiNetworks()
    .then(data => console.log(data))
    .catch(error => console.error(error));

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
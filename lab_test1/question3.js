//Julien Byrnes 101406358

const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logsDir)) {
        const filesToDelete = fs.readdirSync(logsDir);
        console.log('Files to delete:', filesToDelete);

        filesToDelete.forEach((file) => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${filePath}`);
        });

        fs.rmdirSync(logsDir);
        console.log(`Deleted directory: ${logsDir}`);
    } else {
        console.log('Logs directory does not exist.');
    }
}

function createLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(`Created directory: ${logsDir}`);
    }

    process.chdir(logsDir);
    console.log('Changed current directory to Logs.');

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDir, fileName);

        fs.writeFileSync(filePath, `This is log file ${i}.`);
        console.log(`Created file: ${fileName}`);
    }
}

removeLogFiles();
createLogFiles();

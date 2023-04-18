import { writeFile } from "fs";

const targetPath = './src/environments/environment.ts';




const envConfigFile = `export const environment = {
    production: true,
    apiKey: '${process.env['apiKey']}',
    authDomain: '${process.env['authDomain']}',
    projectId: '${process.env['projectId']}',
    storageBucket: '${process.env['storageBucket']}',
    messagingSenderId: '${process.env['messagingSenderId']}',
    appId: '${process.env['appId']}',
    measurementId: '${process.env['measurementId']}',
   
 };
 `;
writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        throw console.error(err);
    } else {
    }
});
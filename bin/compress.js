//Packages
const fs = require('fs');
const path = require('path');

//Modules
const { resizeFile, resizeFileInPlace } = require('./resize');

const resize = (inputPath) => {
  fs.readdir(inputPath, (err, files) => {
    if (err) {
      console.log(`An error has occurred : ${err}`);
    } else {
      files.forEach((file) => {
        resizeFileInPlace(inputPath, file);
      });
    }
  });
};

const resizeWithOutput = (inputPath, outputPath) => {
  fs.readdir(inputPath, (err, files) => {
    if (err) {
      console.log(`An error has occurred : ${err}`);
    } else {
      files.forEach((file) => {
        resizeFile(inputPath, outputPath, file);
      });
    }
  });
};

module.exports = { resize, resizeWithOutput };

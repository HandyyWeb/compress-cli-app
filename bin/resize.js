// Packages
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

//Modules
const calculateNewsize = require('./computation');

const resizeFile = (folderPath, newFolderPath, file) => {
  // Input => folderPath : a string that represent the path of the current folder of the file
  //       => file : the name of the current file
  //
  // Compressed the file in place => modify the original file

  const filePath = path.resolve(folderPath, file);

  sharp(filePath).metadata(async (err, metadata) => {
    // Use metadata to get the current height and width of the image ( see sharp docs )

    const [newWidth, newHeight] = calculateNewsize(
      metadata.width,
      metadata.height
    ); // Get the new width and the new height of the image

    const newPath = path.resolve(newFolderPath, `compressed-${file}`); // Create a new path for the compressed file

    if (!fs.existsSync(path.resolve(newFolderPath))) {
      // Test if the new folder output isn't already created
      await fs.mkdir(path.resolve(newFolderPath), (err) => {
        if (err) {
          console.log('Not created successfully');
        }
      });
    }

    sharp(filePath)
      .resize(newWidth, newHeight)
      .toFile(newPath) // Put the new compressed file in a new file within the folder
      .then(() => {
        console.log('Compressing successfull');
      })
      .catch((err) => {
        console.log(`Ooops, an error occured : ${err}`);
      });
  });
};

const resizeFileInPlace = (folderPath, file) => {
  // Input => folderPath : a string that represent the path of the current folder of the file
  //       => file : the name of the current file
  //
  // Create a new file in which it will put the compressed file

  const filePath = path.resolve(folderPath, file);

  sharp(filePath).metadata((err, metadata) => {
    // Use metadata to get the current height and width of the image ( see sharp docs )

    const [newWidth, newHeight] = calculateNewsize(
      metadata.width,
      metadata.height
    ); // Get the new width and the new height of the images

    const newPath = path.resolve(folderPath, `compressed-${file}`); // Create a new path for the compressed file

    sharp(filePath)
      .resize(newWidth, newHeight)
      .toFile(newPath) // To put the new compressed file in a new file within the folder
      .then(() => {
        console.log('Compressing successfull');
      })
      .catch((err) => {
        console.log(`Ooops, an error occured : ${err.name}`);
      });
  });
};

module.exports = { resizeFile, resizeFileInPlace };

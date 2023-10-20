const calculateNewsize = (oldWidth, oldHeight) => {
  // Input => oldWidth : a number that represent the current width of the file
  //       => oldHeight : a number that represent the current height of the file
  //
  // Calculate the new size of the image based on his previous size

  newHeight = oldHeight;
  newWidth = oldWidth;

  const MAX_WIDTH = 480;
  const MAX_HEIGHT = 220;

  if (oldWidth > oldHeight) {
    if (oldWidth > MAX_WIDTH) {
      newHeight = Math.round((newHeight * MAX_WIDTH) / oldWidth);
      newWidth = MAX_WIDTH;
    }
  } else {
    if (oldHeight > MAX_HEIGHT) {
      newWidth = Math.round((newWidth * MAX_HEIGHT) / oldHeight);
      newHeight = MAX_HEIGHT;
    }
  }

  return [newWidth, newHeight];
};

module.exports = calculateNewsize;

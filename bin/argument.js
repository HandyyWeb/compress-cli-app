const yargs = require('yargs');

const options = yargs
  .usage('sharp <images_folder_path>')
  .check((argv) => {
    // Check for the right numbers of arguments
    if (argv._.length < 1 && argv.o.length < 2) {
      throw new Error('Missing arguments');
    } else if (argv._.length > 1 && argv.o.length > 2) {
      throw new Error('Too many arguments');
    } else {
      return true;
    }
  })
  .option('output', {
    alias: 'o',
    type: 'array',
    demandOption: false,
    describe:
      'Enter a folder output path, as a second argument, in which you want your compressed images to be',
  })
  .help(true).argv;

const args = yargs.argv._;
const optionArgs = yargs.argv.o;

module.exports = { args, optionArgs };

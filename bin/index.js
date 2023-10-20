#!/usr/bin/env node

//Packages
const path = require('path');

//Modules
const { args, optionArgs } = require('./argument');
const { resize, resizeWithOutput } = require('./compress');

if (optionArgs) {
  resizeWithOutput(path.resolve(optionArgs[0]), path.resolve(optionArgs[1]));
} else {
  resize(path.resolve(args[0]));
}

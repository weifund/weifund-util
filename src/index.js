#!/usr/bin/env node

// default module export
const someDefaultModuleExport = function () {
  console.log('Im the default module!');
};

// export default object
module.exports = someDefaultModuleExport;

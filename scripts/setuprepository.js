// Require module
const replace = require('replace-in-file');
const prompt = require('cli-input');
const ps = prompt();

// initial question for cli
console.log('What would you like to call this repo (e.g. "some-repo-name")? '); // eslint-disable

// input valie
ps.on('value', function (value) {
  const options = {
    files: [
      'docs/**/*.*',
      'scripts/**/*.*',
      '**/*.*',
    ],

    // Replacement to make (string or regex)
    replace: /weifund-util/g,
    with: value[0],

    // Specify if empty/invalid file paths are allowed, defaults to false.
    // If set to true these paths will fail silently and no error will be thrown.
    allowEmptyPaths: false,
  };

  replace(options)
  .then(function (changedFiles) {
    console.log('Modified files:', changedFiles.join(', ')); // eslint-disable

    // exit process
    process.exit(0);
  })
  .catch(function (error) {
    console.error('Error occurred:', error); // eslint-disable

    // exit process
    process.exit(0);
  });
});

// run cli input
ps.run();

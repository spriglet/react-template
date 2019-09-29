var gulp = require('gulp');
var jest = require('jest-cli');
var chalk = require('chalk');

gulp.task('test:jest', function (callback) {
  var onComplete = function (result) {
    if (result) {
    } else {
      console.log(chalk.bgRed('!!! Jest tests failed! You should fix them soon. !!!'));
    }
    callback();
  }
  jest.runCLI({}, __dirname, onComplete);
});
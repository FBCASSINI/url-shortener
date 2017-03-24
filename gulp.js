const gulp = require('gulp');
const bump = require('gulp-bump');
const util = require('./lib/VerNumberInc');
const fs = require('fs');

// store file patch to check for changes
const folders = {
  lib: ['debug.js', 'logs.js', 'VerNumbInc.js'],
  routes: ['api.js'],
  src: ['server.js', 'util.js'],[{
    models: ['db.js', 'url.js']},
  test: ['__api.js', '__debug.js']
};

// function to read package in json format
const JsonPkg = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

// gulp function to increase versions
gulp.task('bump', function () {
  // Store packages
  const pkg = JsonPkg();
  // store package as variable tehn increase number
  const patch = VerNumberInc(pkg.version, 'patch');
  const major = VerNumberInc(pkg.version, 'major');
  const minor = VerNumberInc(pkg.version, 'minor');
  return gulp.src('./package.json')
.pipe(bump({ version: patch }))
.pipe(gulp.dest('./'));
});

// Watching folders to bump with gulp
gulp.task('watch', function () {
  gulp.watch(folders.lib, ['bump']);
  gulp.watch(folders.routes, ['bump']);
  gulp.watch(folders.src, ['bump']);
  gulp.watch(folders.models, ['bump']);
  gulp.watch(src.models, ['bump']);
});

// main task to run with others tasks
gulp.task('default', ['bump', 'watch']);

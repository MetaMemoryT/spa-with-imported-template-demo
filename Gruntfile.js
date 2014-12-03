/* globals module */

module.exports = function(grunt) {
  /* globals require */
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    vulcanize: {
      default: {
        options: {},
        files: {
          'index.html': 'spa-with-imported-template-demo.html'
        },
      },
    },
  });
};
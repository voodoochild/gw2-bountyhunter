module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'app/styles/sass',
          cssDir: 'app/styles/css',
          importPath: 'app/styles/imports',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'app/styles/sass',
          cssDir: 'app/styles/css',
          importPath: 'app/styles/imports',
          environment: 'development'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};

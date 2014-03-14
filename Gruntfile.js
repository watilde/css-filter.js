module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: 'js',
          outdir: 'api'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.registerTask('default', ['yuidoc']);
};

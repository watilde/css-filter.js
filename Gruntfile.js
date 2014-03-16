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
          paths: 'src',
          outdir: 'api'
        }
      }
    },
    jshint: {
      options: {
        browser: true,
        sub: true,
      },
      all: ['Gruntfile.js', 'src/css-filter.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint', 'yuidoc']);
  grunt.registerTask('default', ['test']);
};

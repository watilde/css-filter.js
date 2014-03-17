module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-open');

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
          outdir: 'dest/api'
        }
      }
    },
    copy: {
      all: {
        expand: true,
        cwd: 'src/',
        src: ['*.js'],
        dest: 'dest/assets/js/'
      }
    },
    connect: {
      dest: {
        options: {
          hostname: '0.0.0.0',
          port: 5455,
          base: 'dest/',
          livereload: true
        }
      }
    },
    open: {
      dest: {
        path: 'http://localhost:5455'
      }
    },
    jshint: {
      options: {
        browser: true,
        sub: true,
      },
      all: ['Gruntfile.js', 'src/css-filter.js']
    },
    'gh-pages': {
      options: {
        base: 'dest',
      },
      src: ['**']
    },
    watch: {
      all: {
        options: {
          livereload: true,
          hostname: 'localhost',
          port: 5455
        },
        files: ['src/*.js'],
        tasks: ['build'],
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'yuidoc']);
  grunt.registerTask('build', ['test', 'copy']);
  grunt.registerTask('server', ['connect', 'open']);

  // Deploy gh-pages
  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);
  // Main task
  grunt.registerTask('default', [
    'build', 'server', 'watch'
  ]);
};

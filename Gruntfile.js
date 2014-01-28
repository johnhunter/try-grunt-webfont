/* jshint node:true */
var path = require('path');
var matchdep = require("matchdep");


module.exports = function (grunt) {
    // autoload dependencies
    matchdep.filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // main tasks
    grunt.registerTask('default', ['build','connect']);
    grunt.registerTask('build', ['webfont']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/fonts/css',
                options: {
                    font: 'iddle',
                    types: 'eot,woff,ttf',
                    syntax: 'bootstrap',
                    stylesheet: 'css', // scss
                    relativeFontPath: '/build/fonts',
                    engine: 'node'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: '<%= webfont.icons.dest %>'
                }
            }
        }
    });
};
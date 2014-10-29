'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
		files: ['app/controllers/**/*.js', 'lib/**/*.js', 'app/models/**/*.js'],
		options: {
		    jshintrc: '.jshintrc'
		}
	};
};

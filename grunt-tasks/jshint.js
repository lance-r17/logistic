'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
		files: ['app/controllers/**/*.js', 'app/routess/**/*.js', 'app/models/**/*.js', 'app/lib/**/*.js'],
		options: {
	    jshintrc: '.jshintrc'
		}
	};
};

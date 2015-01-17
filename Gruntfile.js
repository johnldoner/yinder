"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		shell: {
			firebase: {
				command: "firebase deploy"
			}
		}
	});

	grunt.loadNpmTasks("grunt-shell");

	grunt.registerTask("deploy", ["shell:firebase"]);
};

"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		shell: {
			firebase: {
				command: "firebase deploy"
			},
			startServer: {
				command: "node ./bin/www"
			}
		}
	});

	grunt.loadNpmTasks("grunt-shell");

	grunt.registerTask("default", ["shell:startServer"]);
	grunt.registerTask("deploy", ["shell:firebase"]);
};

module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 4545,
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default", ["connect"]);
};
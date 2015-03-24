/**
 * Watch for Changes
 * ===============================
 */
/*jshint node:true, camelcase:false */
module.exports = function (grunt, options) {


	return {
		images: {
			files: ['<%= paths.assets %>/images/{,*/}*.{png,jpg,jpeg,gif,svg,webp}'],
			tasks: ['newer:copy:images', 'newer:imagemin:svg']
		},
		js: {
			files: [
				'<%= paths.assets %>/javascripts/{,*/}*.js',
				'!<%= paths.assets %>/javascripts/{,*/}*.{spec,conf}.js'
			],
			tasks: ['newer:copy:js']
		},
		fonts: {
			files: ['<%= paths.assets %>/fonts/{,*/}*.{eot,svg,ttf,woff,woff2}'],
			tasks: ['newer:copy:fonts']
		},
        media: {
            files: ['<%= paths.assets %>/media/{,*/}*.*'],
            tasks: ['newer:copy:media']
        },
		app: {
			files: [
				'<%= paths.documents %>/*.md',
				'<%= paths.views %>/{,*/}*.*',
				'<%= paths.fixtures %>/*.json'
			],
			tasks: [grunt.config('properties.engines.views')]
		},
		livereload: {
			options: {
				livereload: '<%= hosts.devbox.ports.livereload %>'
			},
			files: [
				'<%= paths.html %>/{,*/}<%= properties.viewmatch %>',
				'<%= paths.css %>/{,*/}*.css',
				'<%= paths.fonts %>/{,*/}*.{eot,svg,ttf,woff,woff2}',
				'<%= paths.images %>/{,*/}*.{png,jpg,jpeg,gif,svg,webp}',
				'!<%= paths.images %>/rgbapng/*.png',
				'<%= paths.js %>/{,*/}*.js',
				'!<%= paths.js %>/{,*/}*.spec.js'
			]
		}
	};
};
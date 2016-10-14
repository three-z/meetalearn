'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	prefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require('browser-sync').create(),
	bemjson2html = require('gulp-bemjson2html'),
	rename = require('gulp-rename'),
	prettify = require('gulp-prettify'),
	reload = browserSync.reload;

var paths = {
	build: {
		bemjson: '',
		bemhtml: 'src/bem/template/',
		css: 'css/'
	},
	src: {
		bemjson: 'src/bem/*.bemjson.js',
		bemhtml: 'src/bem/**/[^_]*.bemhtml.js',
		style: 'src/scss/*.scss'
	},
	watch: {
		bem: 'src/bem/**/[^_]*.js',
		style: 'src/scss/**/*.scss'
	}
};

var config = {
	server: {
		baseDir: ''
	},
	tunnel: false,
	host: 'localhost',
	port: 9000
};

gulp.task('webserver', function () {
	browserSync.init(config);
});

gulp.task('clean', function (cb) {
	rimraf('./*.html', cb);
	rimraf('./css/', cb);
});

gulp.task('bemhtml:build', function() {
    return gulp.src(paths.src.bemhtml)
    	.pipe(plumber())
	    .pipe(concat('_all.bemhtml.js'))
	    .pipe(gulp.dest(paths.build.bemhtml));
});

gulp.task('bemjson:build', ['bemhtml:build'], function () {
	gulp.src(paths.src.bemjson)
		.pipe(plumber())
		.pipe(bemjson2html({template: paths.build.bemhtml + '_all.bemhtml.js'}))
		.pipe(prettify({
			'indent_size': 1,
		    'indent_char': '	'
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace('.bemjson', '');
			path.extname = '.html';
		}))
		.pipe(gulp.dest(paths.build.bemjson))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
	gulp.src(paths.src.style)
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(prefixer({
			browsers: [
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6'
			],
			cascade: false
		}))
		.pipe(gulp.dest(paths.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('build', [
	'bemjson:build',
	'style:build'
]);

gulp.task('watch', function(){
	watch([paths.watch.bem], function(event, cb) {
		gulp.start('bemjson:build');
	});
	watch([paths.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
});

gulp.task('default', ['build', 'webserver', 'watch']);
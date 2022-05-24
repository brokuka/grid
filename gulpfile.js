"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");
const del = require("del");
const cssnano = require("gulp-cssnano");
const notify = require("gulp-notify");
const webpackStream = require('webpack-stream');
const browserSync = require("browser-sync").create();



/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
	build: {
		html: distPath,
		css: distPath + "assets/css/",
	},
	src: {
		html: srcPath + "*.html",
		css: srcPath + "assets/scss/*.scss",
	},
	watch: {
		html: srcPath + "**/*.html",
		css: srcPath + "assets/scss/**/*.scss",
	},
	clean: "./" + distPath
}



/* Tasks */

function serve() {
	browserSync.init({
		server: {
			baseDir: "./" + distPath
		}
	});
}

function html(cb) {
	return src(path.src.html, { base: srcPath })
		.pipe(plumber())
		.pipe(dest(path.build.html))
		.pipe(browserSync.reload({ stream: true }));

	cb();
}

function css(cb) {
	return src(path.src.css, { base: srcPath + "assets/scss/" })
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "SCSS Error",
					message: "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(sass({
			includePaths: './node_modules/'
		}))
		.pipe(autoprefixer({
			cascade: true
		}))
		.pipe(dest(path.build.css))
		.pipe(cssnano({
			zindex: false,
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(removeComments())
		.pipe(rename({
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.reload({ stream: true }));

	cb();
}

function cssWatch(cb) {
	return src(path.src.css, { base: srcPath + "assets/scss/" })
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "SCSS Error",
					message: "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(sass({
			includePaths: './node_modules/'
		}))
		.pipe(rename({
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.reload({ stream: true }));

	cb();
}

function clean(cb) {
	return del(path.clean);

	cb();
}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], cssWatch);
}

const build = gulp.series(clean, gulp.parallel(html, css));
const watch = gulp.parallel(build, watchFiles, serve);



/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;

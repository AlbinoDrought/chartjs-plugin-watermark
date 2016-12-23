var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var merge = require('merge-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');

var header = "/* chartjs-plugin-watermark | AlbinoDrought | MIT License | https://github.com/AlbinoDrought/chartjs-plugin-watermark/blob/master/LICENSE */\n";
var outDir = "./";

gulp.task('build', buildTask);

function buildTask() {
    var build = browserify('./src/chart.plugin.watermark.js')
        .ignore('chart.js')
        .bundle()
        .pipe(source('chartjs-plugin-watermark.js'))
        .pipe(buffer())
        .pipe(insert.prepend(header))
        .pipe(gulp.dest(outDir))
        // min build
        .pipe(streamify(uglify()))
        .pipe(insert.prepend(header))
        .pipe(streamify(concat('chartjs-plugin-watermark.min.js')))
        .pipe(gulp.dest(outDir));

    return build;
}
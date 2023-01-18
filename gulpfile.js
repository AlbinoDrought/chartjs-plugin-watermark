const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const merge = require('merge-stream');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');
const insert = require('gulp-insert');
const concat = require('gulp-concat');
const buffer = require('vinyl-buffer');

const header = "/* chartjs-plugin-watermark | AlbinoDrought | MIT License | https://github.com/AlbinoDrought/chartjs-plugin-watermark/blob/master/LICENSE */\n";
const outDir = "./";

function buildTask() {
    const build = browserify('./src/chart.plugin.watermark.js')
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

gulp.task('default', buildTask);

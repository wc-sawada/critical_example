//プラグイン
var gulp = require('gulp'),
	critical = require('critical'),
	inline = require('inline-critical');

gulp.task('pc-critical', function () {
	critical.generate({
		inline: true,
		base: './', // どこのディレクトリ配下なのか
		src: 'index.html', // baseで指定したディレクトリ配下のどこのファイルを参照するのか
		width: 1920, // 横幅
		height: 1080, // 縦幅
		minify: true,
		dest: 'index-critical.html',
	});
});
gulp.task('sp-critical', function () {
	critical.generate({
		inline: true,
		base: './', // どこのディレクトリ配下なのか
		src: 'sp_index.html', // baseで指定したディレクトリ配下のどこのファイルを参照するのか
		width: 1125, // 横幅
		height: 2436, // 縦幅
		minify: true,
		dest: 'sp_index-critical.html',
	});
});


var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
	gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['Android >= 4.0', "not ie <= 8"],
			cascade: true, //是否美化属性值 默认：true 像这样：
			//-webkit-transform: rotate(45deg);
			//        transform: rotate(45deg);
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(gulp.dest('dist'));
	// gulp.src('dev/index-xs.css')
	// 	.pipe(autoprefixer({
	// 		browsers: ['last 2 versions', 'Android >= 4.0', "ie>=8"],
	// 		cascade: true, //是否美化属性值 默认：true 像这样：
	// 		//-webkit-transform: rotate(45deg);
	// 		//        transform: rotate(45deg);
	// 		remove: true //是否去掉不必要的前缀 默认：true 
	// 	}))
	// 	.pipe(gulp.dest('dist/dev'));
});
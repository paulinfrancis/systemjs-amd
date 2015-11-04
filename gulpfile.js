(() => {
	'use strict';
	
	const gulp = require('gulp');
	const del = require('del');
	const Builder = require('systemjs-builder');
	
	gulp.task('rm-bundles', () => {
		del.sync('bundles');
	});
	
	gulp.task('bundle', ['rm-bundles'], () => {
		const builder = new Builder('src');
		
		builder.buildStatic('**/*', 'bundles/bundle.js')
		       .then(() => {
				   console.log('Bundle OK');
			   })
			   .catch((err) => {
				   console.log('Bundle error!')
				   console.log(err);
			   });
	});
	
})();
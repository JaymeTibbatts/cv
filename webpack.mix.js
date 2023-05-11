let mix = require('laravel-mix');

mix.setPublicPath('./dist');

mix.sass('src/css/fonts.scss', 'css').options({
	processCssUrls: false,
	autoprefixer: {
		options: {
			grid: true,
		},
	},
});

mix.css('src/css/reset.css', 'css');

mix.sass('src/css/app.scss', 'css').options({
	processCssUrls: false,
	autoprefixer: {
		options: {
			grid: true,
		},
	},
});

mix.js('src/js/app.js', 'js')
   .js('src/js/svg-inject.min.js', 'js');

mix.copyDirectory('src/fonts', 'dist/fonts');
mix.copyDirectory('src/images', 'dist/images');

   
/*
 * CONFIG.JS
*/

// define paths
var ROOT = '..';
var assets = 'assets';
var resources = ROOT + '/resources';
var path = {
	vhost: 'http://vab-hoc6t068.tdlinx.int',
	development: {
		scripts: assets + '/js',
		styles:  assets + '/sass',
		images:  assets + '/img',
		svg:  	 assets + '/svg',
		icons:   assets + '/icons',
		sketch:  assets + '/sketch',
		swf:  	 assets + '/swf'
	},
	production: {
		scripts: resources + '/js',
		styles:  resources + '/css',
		images:  resources + '/img',
		svg:  	 resources + '/svg',
		fonts:   resources + '/fonts',
		swf:  	 resources + '/swf',
		markup:  ROOT 	   + '/markup',
	}
};

// normally you don't need to go any further then this :)
// settings are done above
module.exports = {
	browserSync: {
		theSyncer: null,
		options: {
	        port: 9999,
			proxy: path.vhost,
			online: true,
			notify: false
	    }
	},
	// styles
	styles: {
		src: path.development.styles + '/**/**/*.{sass,scss}',
		dest: path.production.styles,
		compassOptions: {
			comments: false,
			sourcemap: true,
			style: 'expanded',
			require: ['sass-globbing'],
			css: path.production.styles,
			font: path.development.fonts,
			sass: path.development.styles,
			image: path.development.images,
			generated_images_path: path.production.images
		},
		sassOptions: {
			outputStyle: 'expanded',
		},
		autoprefixer: {
			// browsers: ['last 2 versions'],
			cascade: false
		}
	},
	// scripts
	scripts: {
		src: [path.development.scripts + '/head/*.js', path.development.scripts + '/libs/*.js', path.development.scripts + '/plugins/**/*.js', path.development.scripts + '/ui/**/*.js', path.development.scripts + '/*.js'],
		dest: path.production.scripts,
		name: 'main.js'
	},
	// images
	images: {
		src: [path.development.images + '/**/**/**/*'],
		dest: path.production.images,
		options: {
			progressive: true
		}
	},
	// svg
	svg: {
		src: [path.development.svg + '/**/*.svg'],
		dest: path.production.svg,
		options: {
			svgoPlugins: [{ removeViewBox: true }, { removeUselessStrokeAndFill: true }, { removeEmptyAttrs: true }]
		}
	},
	// sketch
	sketch: {
		src: path.development.sketch + '/*.sketch',
		dest: path.development.icons,
		options: {
			export: 'artboards',
			// items: 'icons',
			formats: 'svg',
			compact: true,
			trimmed: true,
			clean: true
		}
    },
	// icon font
	iconfont: {
		src: [path.development.icons + '/*.svg'],
		dest: path.production.fonts,
		stylesTemplate: assets + '/templates/_icons.scss',
		stylesDest: path.development.styles + '/ui/01_atoms',
		options: {
			centerHorizontally: true,
			appendUnicode: false,
			fontName: 'VAB-icons',
			// fontHeight: 16,
			fontPath: '../fonts/',
			formats: ['ttf', 'eot', 'woff', 'woff2'],
			className: 'icon',
			normalize: true,
			timestamp: Math.round(Date.now() / 1000),
			log: () => {}
		}
	},
	// markup
	markup: {
		src: [ROOT + '/*.{html,php}', path.production.markup + '/**/**/*.{html,php}']
	},
	// swf
	swf: {
		src: [path.development.swf + '/*.swf'],
		dest: path.production.swf
	}
};
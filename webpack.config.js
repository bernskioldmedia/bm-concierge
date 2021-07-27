const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const fastGlob = require( 'fast-glob' );
const WebpackBar = require( 'webpackbar' );
const ReplaceInFileWebpackPlugin = require( 'replace-in-file-webpack-plugin' );

const sharedConfig = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new ReplaceInFileWebpackPlugin( [
			{
				dir: 'assets/scripts/dist',
				test: [ /\.js/ ],
				rules: [
					{
						search: /TEXTDOMAIN/gi,
						replace: 'bm-concierge',
					},
				],
			},
		] ),
	],
};

const scripts = {
	...sharedConfig,
	entry: {
		'block-editor': './assets/scripts/src/block-editor.js',
	},
	output: {
		path: path.resolve( process.cwd(), 'assets/scripts/dist' ),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	plugins: [
		...sharedConfig.plugins,
		new WebpackBar( {
			name: 'Scripts',
			color: '#5aec1c',
		} ),
	],
};

module.exports = [ scripts ];

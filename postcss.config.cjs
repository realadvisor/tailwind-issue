/* eslint-disable @typescript-eslint/no-var-requires */

const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		postcssImport,
		postcssNesting,
		// Some plugins, like postcss-nested, need to run before Tailwind
		tailwindcss,
		// But others, like autoprefixer, need to run after
		autoprefixer
	]
};

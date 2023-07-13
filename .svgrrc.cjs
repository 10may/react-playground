module.exports = {
	// jsxRuntime: 'automatic',

	className: false,
	descProp: true,
	filenameCase: 'kebab',
	jsxRuntime: 'classic',
	memo: true,
	outDir: 'src/component/svg',
	placeAttrValues: {},
	ref: true,
	template: require('./svgr-template.cjs'),
	titleProp: true,
	typescript: true,

	// ignoreExisting: true,

	jsx: {
		babelConfig: {
			plugins: [
				// For an example, this plugin will remove "id" attribute from "svg" tag
				[
					'@svgr/babel-plugin-remove-jsx-attribute',
					{
						elements: [
							'circle',
							'g',
							'linearGradient',
							'mask',
							'path',
							'rect',
							'svg',
						],
						attributes: ['id', 'className', 'fill', 'stroke'],
					},
				],
			],
		},
	},

	prettier: {
		arrowParens: 'avoid',
		bracketSameLine: false,
		bracketSpacing: true,
		printWidth: 80,
		semi: true,
		singleQuote: true,
		tabWidth: 4,
		trailingComma: 'all',
		useTabs: true,
	},
};

//  npx @svgr/cli -- source-folder-name
//  npx @svgr/cli -- source-svg

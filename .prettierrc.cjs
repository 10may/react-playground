module.exports = {
	semi: true,
	printWidth: 80,
	tabWidth: 4,
	singleQuote: true,
	bracketSpacing: true,
	bracketSameLine: false,
	useTabs: true,
	arrowParens: 'avoid',
	jsxSingleQuote: true,
	trailingComma: 'all',

	importOrderParserPlugins: ['classProperties', 'typescript', 'jsx'],
	importOrder: [
		'^@/api/(.*)$',
		'^@/assets/(.*)$',
		'^@/components/(.*)$',
		'^@/features/(.*)$',
		'^@/pages/(.*)$',
		'^@/redux/(.*)$',
		'^@/styles/(.*)$',
		'^@/utils/(.*)$',
		'^[../]',
		'^[./]',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	plugins: [
		require.resolve('@trivago/prettier-plugin-sort-imports'),
		require.resolve('prettier-plugin-tailwindcss'),
	],
};

/*
    yad prettier prettier-eslint @trivago/prettier-plugin-sort-imports
*/

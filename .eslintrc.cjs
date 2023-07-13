module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',

		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',

		// 'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',

		'plugin:import/recommended',
		'plugin:import/typescript',

		'plugin:tailwindcss/recommended',

		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
	rules: {
		'no-unused-vars': 'off',
		'react/jsx-key': 'warn',
		'react/prop-types': 'off',

		// TypeScript
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/consistent-type-exports': 'warn',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/sort-type-constituents': 'warn',
		// '@typescript-eslint/no-floating-promises': 'off',
		// '@typescript-eslint/no-misused-promises': [
		// 	'error',
		// 	{
		// 		checksVoidReturn: {
		// 			arguments: false,
		// 			attributes: false,
		// 		},
		// 	},
		// ],

		// turn on errors for missing imports
		'import/default': 'warn',
		'import/no-cycle': 'warn',
		'import/no-duplicates': 'warn',
		'import/no-named-as-default': 'off',
		'import/no-self-import': 'warn',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': 'error',
		'import/no-useless-path-segments': 'warn',

		// unused import
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:jest/recommended',
		'plugin:eslint-comments/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	plugins: ['jest', 'eslint-comments'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true
	},
	rules: {}
};

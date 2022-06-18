module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'react/jsx-indent': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-curly-spacing': 'off',
		'arrow-body-style': 'off',
		'default-case': 'off',
		'array-bracket-spacing': 'off',
		'react/jsx-props-no-spreading': 'off',
		'object-curly-newline': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-filename-extension': 'off',
		'object-property-newline': 'off',
		'react/no-array-index-key': 'off',
		'react/require-default-props': 'off',
		eqeqeq: 'off',
		'no-alert': 'off',
	},
};

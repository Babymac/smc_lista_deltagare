module.exports = {
	extends: ['airbnb', 'prettier'],
	env: {
		node: true,
		mocha: true,
		browser: true,
		jasmine: true
	},
	rules: {
		'react/destructuring-assignment': 0,
		'import/no-extraneous-dependencies': 0,
		'react/prop-types': 0,
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-closing-bracket-location': 'off',
		'jsx-a11y/label-has-for': 'off',
		'no-underscore-dangle': 'off',
		'no-case-declarations': 'off',
		'no-unused-expressions': 'off',
		'array-callback-return': 'off',
		'operator-linebreak': 'off',
		indent: 'off',
		'no-use-before-define': 'off',
		'comma-dangle': 'off',
		'no-param-reassign': 'off',
		'no-bitwise': 'off'
	}
};

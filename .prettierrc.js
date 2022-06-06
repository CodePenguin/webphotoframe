/* eslint-env node */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 180,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: [
        '*.html'
      ],
      options: {
      printWidth: 300,
      singleQuote: false
      }
    }
  ]
}
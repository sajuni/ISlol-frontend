module.exports = {
    rules: {
        "prettier/prettier": ['error', {
            singleQuote: true,
            semi: true,
            useTabs: true,
            tabWidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            bracketSpacing: true,
            arrowParens: 'avoid',
        }]
    }
}
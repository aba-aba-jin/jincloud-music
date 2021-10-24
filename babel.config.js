module.exports = {
    "presets": ["@babel/preset-react"],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'],
    ]
}
const rp = require('./resolveParameter')
const rf = require('./resolveFile')

function resolveOptions(args) {
    const { file, option } = rp(args)

    const resolvedFile = rf(file)

    const sassArray = [
        {
            sass: /\.sass$/,
            data: resolvedFile ? `@import ${resolvedFile}` : undefined
        },
        {
            sass: /\.scss$/,
            data: resolvedFile ? `@import ${resolvedFile};` : undefined
        }
    ]

    return {
        option,
        sassArray
    }
}

module.exports = resolveOptions

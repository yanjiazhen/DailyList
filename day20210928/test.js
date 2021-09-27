// 测试文件，用来测试babel插件
const myPluging = require('./index.js')
console.log(myPluging)

// 如何通过API的方式去跑插件，使用插件@babel/core
const { transformAsync } = require('@babel/core')
const code = `
    console.log('yan')
`
const babelConfig = {
    plugins: ['./index.js']
}


// transformAsync传入两个参数，code和pluging插件
const output = transformAsync(code, babelConfig)
console.log(output, output.code)
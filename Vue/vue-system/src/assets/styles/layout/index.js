const files = require.context('.', true, /\.svg$/)
const modules = {}

files.keys().forEach((item) => {
  modules[item.replace(/\.\/|\.svg/g, '')] = files(item)
})

export default modules

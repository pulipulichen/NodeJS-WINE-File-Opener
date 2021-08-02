const config = require('./config.js')

const handleFileFromArgv = require('./lib/cli/handleFileFromArgv.js')

handleFileFromArgv({
  lockKey: false,
},(file) => {
  console.log(file)
  //let command = `wine "${config.appPath}" `
})


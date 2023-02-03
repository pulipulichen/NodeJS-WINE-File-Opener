//const config = require('./config.js')
const handleFileFromArgv = require('./lib/cli/handleFileFromArgv.js')
const execShellCommand = require('./lib/cli/execShellCommand.js')
const PrimeRUN = require('./lib/prime-run.js')

const path = require('path')

module.exports = function (appPath) {
  PrimeRUN()

  handleFileFromArgv({
    lockKey: false,
    runWithoutArgv: true
  },(file) => {
  
    if (!file) {
      execShellCommand(`${appPath}`)
      return
    }

    file = path.resolve(file)
    // console.log(file)
  
    let dirname = path.dirname(file)
    let filename = path.basename(file)
    //console.log(dirname)
    
    process.chdir(dirname)
  
    let command = `${appPath} "${filename}"`
    //console.log(command)
  
    execShellCommand(command)
  }) 
}

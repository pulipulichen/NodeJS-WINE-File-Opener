const wineFileOpener = require('./../playonlinux.js')

let appPath = '/usr/share/playonlinux/playonlinux --run "Microsoft Word 2007"'
wineFileOpener(appPath)
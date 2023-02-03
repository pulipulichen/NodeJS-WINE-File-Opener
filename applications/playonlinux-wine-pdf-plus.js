const wineFileOpener = require('./../playonlinux.js')

let appPath = '/usr/share/playonlinux/playonlinux --run "wine-pdf-plus-portable"'
wineFileOpener(appPath)

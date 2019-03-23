const { app, BrowserWindow, Menu, Tray } = require('electron')

let appIcon = null

function createWindow () {
	let win = new BrowserWindow({ width: 1024, height: 768, icon: __dirname + 'icon.icns', webPreferences: { nodeIntegration: false } })
  	win.loadURL('https://web.skype.com', {userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.128 Safari/537.36'})
}

app.on('ready', createWindow)

const { app, BrowserWindow, ipcMain} = require('electron')
const {myfnc} = require('./controllers/user_controller.js');

function createWindow () {
 
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile("renderer/index.html")

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//listener

ipcMain.on('clicked', (event, arg) => {
  myfnc();
})

const { app, BrowserWindow, ipcMain} = require('electron')
const {login, init,try_local_login} = require('./controllers/user_controller.js');

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  // win.removeMenu()
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

ipcMain.on('login', (event, arg, win) => {
  login(arg);
});


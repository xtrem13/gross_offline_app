const { app, BrowserWindow, ipcMain} = require('electron')
const {login, init,try_local_login} = require('./controllers/user_controller.js');

async function createWindow() {
  const has_local_password= await init();
  let start_page='../renderer/index.html';
  // if(has_local_password)
  //   start_page="local_password.html";
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile(`renderer/${start_page}`)

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

ipcMain.on('login', (event, arg) => {
  login();
});


ipcMain.on('try_local_login', (event, arg) => {
  try_local_login(arg);
})

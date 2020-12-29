const { app, BrowserWindow, ipcMain} = require('electron');
const { beneficiar_create } = require('./controllers/beneficiar_controller.js');
const {login,set_local_password,local_password_init, check_local_pass} = require('./controllers/user_controller.js');

var mainWindow;
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

  win.loadFile("renderer/create_contract.html")

  mainWindow=win;
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
  login(arg, mainWindow);
});

ipcMain.on('set_local_password', (event, user_id, local_password) => {
  set_local_password(user_id, local_password,mainWindow );
});

ipcMain.on('local_password_init', (event) => {
  local_password_init(event, mainWindow);
});

ipcMain.on('check_local_pass', (event, credentials) => {
  check_local_pass(event, credentials, mainWindow);
});


// Shoh functions
ipcMain.on('beneficiar_create', (came, mainWindow) => {
  beneficiar_create(came, mainWindow)
});
// Shoh functions
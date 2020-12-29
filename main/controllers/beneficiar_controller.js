const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Beneficiar = require('../models/beneficiar.js');
const axios = require('axios');
const md5 = require('md5');

const beneficiar_controller = () => {

    const create = async (arg, win) => {
        console.log(win);
        try {
            const beneficiar = await Beneficiar.create(arg);
            
            win.webContents.send('beneficiar_saved',beneficiar);
        }
        catch (e) {
            console.log(e)
        }

    }
    return {
        beneficiar_create: create
    }
}
module.exports = beneficiar_controller();
const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Beneficiar = require('../models/beneficiar.js');
const axios = require('axios');
const md5 = require('md5');

const client_controller = () => {

    const create = async (win, arg) => {

        try {
            const user = await Beneficiar.create(arg)
            console.log(user)
        }
        catch (e) {
            console.log(e)
        }

    }
    return {
        beneficiar_create: create
    }
}
module.exports = client_controller();
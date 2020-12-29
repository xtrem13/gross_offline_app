const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Insurant = require('../models/insurant.js');
const axios = require('axios');
const md5 = require('md5');

const insurant_controller = () => {

    const create = async (win, arg) => {

        try {
            const user = await Insurant.create(arg)
            console.log(user)
        }
        catch (e) {
            console.log(e)
        }

    }
    return {
        insurant_create: create
    }
}
module.exports = insurant_controller();
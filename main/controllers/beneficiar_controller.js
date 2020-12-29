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
        catch(e) {
            console.log(e)
        }

    }
    const set_local_password = async (user_id, local_password, win) => {
        var user = await User.findOne({ where: { system_id: user_id } });
        user.LOCAL_PASSWORD_HASH = md5(local_password);
        await user.save();
        win.webContents.send('local_password_saved');
    }
    const local_password_init = async (event, win) => {
        let users = await User.findAll();
        win.webContents.send('users_loaded', users);
    }
    const check_local_pass = async (event, credentials, win) => {
        const user = await User.findOne({
            where: {
                id: credentials.id,
                LOCAL_PASSWORD_HASH: md5(credentials.password)
            }
        });
        console.log(user);
    }
    return {
        beneficiar_create: create,
        set_local_password: set_local_password,
        local_password_init: local_password_init,
        check_local_pass: check_local_pass
    }
}
module.exports = beneficiar_controller();
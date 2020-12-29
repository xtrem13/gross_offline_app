const { ipcMain } = require('electron')
const Contract = require('../models/contract.js');

const contract_controller=()=>{
	const create=async (event, payload, win)=>{
		await Contract.create(JSON.parse(payload));
		win.webContents.send('contract_saved');
	}
	
	return {
		create:create
	}
}
module.exports=contract_controller();
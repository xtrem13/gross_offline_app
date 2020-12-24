const { ipcMain } = require('electron')
const User = require('../models/user.js');
const Contract = require('../models/contract.js');

const users_controller=()=>{
	
	const myfnc=()=>{
		console.log("myfunc triggered");
		const users=User.findAll();
		console.log(JSON.stringify(users))
	}
	
	return {
		myfnc:myfnc
	}
}
module.exports=users_controller();
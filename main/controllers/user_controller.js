const { ipcMain } = require('electron')
const User = require('../models/user.js');
// const Contract = require('../models/contract.js');

const users_controller=()=>{
	const init=()=>{
		return (User.findAll.length)===1;
	}
	const try_local_login=async (password)=>{
		const users=await User.findAll();
		console.log(users[0].local_pass==password);
		if(users.length==1)
			return users[0].local_pass==password;
		return false;
	}

	const login=()=>{
		console.log("login");
	}
	
	return {
		login:login,
		init:init,
		try_local_login:try_local_login
	}
}
module.exports=users_controller();
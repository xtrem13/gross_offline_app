const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const User = require('../models/user.js');
const axios=require('axios');


const users_controller=()=>{

	const login=(arg, win)=>{
		axios.post('http://edupark.uz/auth.php', {
			username: arg.login,
			password: arg.password
		})
		.then(function (response) {
			let data=response.data;
			if(data.auth==true)
				win.webContents.send('successfull_login');
		})
		.catch(function (error) {
			
		});
	}
	

	return {
		login:login
	}
}
module.exports=users_controller();
const { ipcMain } = require('electron')

const users_controller=()=>{
	
	const myfnc=()=>{
		console.log("myfunc triggered");
	}
	
	return {
		myfnc
	}
}
module.exports=users_controller();
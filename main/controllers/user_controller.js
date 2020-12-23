const users_controller=()=>{
	const myfnc=()=>{
		console.log("myfunc triggered");
	}
	return {
		myfnc:myfnc
	}
}
module.exports=users_controller();
const helpers=()=>{
	const include= async (path, elementId)=>{
		try{
			const root=document.getElementById(elementId);
			await fetch(path)
			.then((resp)=>{
				return resp.text()
			})
			.then(content=>{
				const tree=document.createElement("div");
				tree.innerHTML=content;
				root.parentNode.replaceChild(tree.children[0].cloneNode(true), root);
				eval(tree.children[1].innerHTML);
			})
		}catch(e){
			console.log(e)
		}
	}
	return {
		include:include
	}
}
module.exports=helpers();
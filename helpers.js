function include(path){
	const root=document.getElementById('content');
	fetch(path)
	.then((resp)=>{
		return resp.text()
	})
	.then(content=>{
		const tree=new DOMParser().parseFromString(content, "text/xml");
		root.appendChild(tree.children[0]);
	})
}

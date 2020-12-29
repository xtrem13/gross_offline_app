function include(path){
	const root=document.getElementById('root');
	fetch(path)
	.then((resp)=>{
		return resp.text()
	})
	.then(content=>{
		const tree=new DOMParser().parseFromString(content, "text/html");
		root.appendChild(tree.children[0]);
	})
}

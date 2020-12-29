async function include(path, elementId){
	const root=document.getElementById(elementId);
	await fetch(path)
	.then((resp)=>{
		return resp.text()
	})
	.then(content=>{
		const tree=document.createElement("div");
		tree.innerHTML=content;
		root.appendChild(tree.children[0].cloneNode(true));
		eval(tree.children[1].innerHTML);
	})
}

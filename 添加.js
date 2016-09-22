(function(){
	/*var newli = document.createElement('li')
	var newnode = document.createTextNode('文本3')
	newli.appendChild(newnode);
	document.getElementById("ul").appendChild(newli);
	
	var parent=document.getElementById("ydiv")
	var child=document.getElementById("ul")
	parent.removeChild(child)
	*/
	var child=document.getElementById("ydiv");
	child.parentNode.removeChild(child);
}(window))

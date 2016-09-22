(function(){
	/*document.getElementById("pp").innerHTML="asdf";
	document.getElementById("img").src="02.gif";*/
	/*var btn =document.getElementById("button");
	btn.onclick = function(){
		document.getElementById("pp").innerHTML="asdf";
		document.getElementById("img").src="02.gif";
	}*/
	/*var btn =document.getElementById("button");
	btn.onclick = function(){
		var x = document.getElementById("img");*/
		/*if (x.src.match("02.gif")) {
			x.src="01.gif";
			x.style.display="none";
		} else{
			x.src="02.gif";
			x.style.display="block"
		}
		if (x.style.visibility=="visible") {
			x.style.visibility="hidden";
		} else{
			x.style.visibility="visible";
		}*/
		
		/*if (x.style.display=="block") {
			x.style.display="none"			
		} else{
			x.style.display="block"
		}
		var luli = document.getElementById("li");
		luli.onclick =function(){
		var a = document.getElementById("li").innerHTML;
		document.write("a")
		console.log(a);
		}*/	
//	}
		/*var x=document.getElementById("img");
		x.onload = function(){
			x.style.width='100px';
		}*/
		/*var a=document.getElementById("wenben");
			a.onmousemove =function(){
				a.style.color="red";
			}*/
		/*var a= document.getElementById("div");
			a.onmousedown = function(){
				a.style.backgroundColor="red";
				a.innerHTML="松开鼠标";
				console.log(a);
			}
			a.onmouseup =function(){
				a.style.backgroundColor="blue";
				a.innerHTML="谢谢你";
			}*/
		/*var a = document.getElementById("onfoces");
			a.onfocus = function(){
				a.style.backgroundColor="blue"
			}*/
		document.getElementById("button").addEventListener("click", displayDate);
		function displayDate(){
			document.getElementById("ppp").innerHTML = Date();
		}
}(window))

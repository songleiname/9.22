(function(){
	var xx = document.getElementById("xingming");
			xx.onfocus = function(){
				xx.style.color="black"
			}
			xx.onblur = function(){
				xx.style.color="red"
			}
	var yy = document.getElementById("xingbie");
			yy.onfocus = function(){
				yy.style.color="black"
			}
			yy.onblur = function(){
				yy.style.color="red"
			}
	var zz = document.getElementById("nianling");
			zz.onfocus = function(){
				zz.style.color="black"
			}
			zz.onblur = function(){
				zz.style.color="red"
			}		
	var btn = document.getElementById("qd");
			btn.onclick = function(){
				var a=document.getElementById("xingming").value;
				var b=document.getElementById("xingbie").value;
				var c=document.getElementById("nianling").value;
				alert(a+b+c);
			}
	var qx = document.getElementById("qx");
			qx.onclick = function(){
				xx.value=null;
				yy.value=null;
				zz.value=null;
			}
		document.getElementById("dj").addEventListener("click", displayDate);
		function displayDate(){
			document.getElementById("ppp").innerHTML = Date();
			console.log()
		}
		document.getElementById("djdiv").addEventListener("click", displayDate);
		function displayDate(){
			document.getElementById("ppp").innerHTML = Date();
		}
		
		
		
		
		var addBtn = document.getElementById("addButton");
		var removeBtn = document.getElementById("removeButton");
		
		function myFunction(){
			console.log('add event');
		}
		
		addBtn.addEventListener('click',function(){
			document.getElementById('myDiv')
			addEventListener('mousemove',myFunction);
		})
		removeBtn.addEventListener('click',function(){
			document.getElementById('myDiv')
			removeEventListener('mousemove',myFunction);
		})		
}(window))

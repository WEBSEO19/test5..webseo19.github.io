// block.style="width:100px;height:100px;background:red";
var bb=document.getElementById('block');
var c=0;
var elem;

function push(){
	// bb.innerHTML="<div class='elem'></div>"
	if(c>9){c=0}
	elem=document.createElement("div");
	elem.id="eds"+c;
	elem.className="qwerty";
	elem.style="width:100px;height:100px;background:red;float:left";
	elem.style.backgroundImage="url(img/"+c+".jpg)";
	elem.style.backgroundSize="100% 100%";
	bb.appendChild(elem);
	c++;
	
}
function dell(){
	/**
	// elem.remove();
	// bb.removeChild(elem);
	// eds3.remove();
	****/
	// var qwerty=document.getElementsByClassName("qwerty");
	// qwerty[qwerty.length-1].remove();
	var qwerty=document.getElementsByClassName("qwerty");
	bb.removeChild(qwerty[qwerty.length-1]);
}
function pushIn(){
	var list=document.getElementsByClassName("qwerty");
	var a=prompt("");
	newelem=document.createElement("div");
	newelem.style="width:100px;height:100px;background:pink;float:left";
	// bb.insertBefore(newelem,bb.children[1]) //втавить после 1го ребенка
	bb.insertBefore(newelem,list[a])
}
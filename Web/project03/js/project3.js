window.onload = function(){

	var pall = document.querySelectorAll("li");

	var date1 = new Date();

	var newli = document.createElement("li");
  	var node = document.createTextNode("p9");
  	newli.appendChild(node);

	pall[0].addEventListener("click", function(){
		pall[0].style.color = "#ff0000";
	})

	pall[1].addEventListener("click", function(){
		document.getElementsByTagName("h1")[0].innerHTML = date1.getFullYear() + "-" + (date1.getMonth()+1) + "-" + date1.getDate();
	})

	pall[2].addEventListener("click", function(){
		var a = this.parentNode.querySelectorAll("li");
		for (var i = 0; i < a.length; i++){
			a[i].classList.add("fn-active");
		}
	})

	pall[3].addEventListener("click", function(){
		pall[7].remove();
	})

	pall[4].addEventListener("click", function(){
		window.open("https://ai.taobao.com/", "_blank");
	})

	pall[5].addEventListener("click", function(){
  		document.getElementsByTagName("ul")[0].appendChild(newli);
	})
	
	document.getElementsByTagName("ul")[0].addEventListener("click", function(e){
		if (e.target.innerHTML[0] == 'p'){
			alert(e.target.innerHTML[1]);
		}
	})

	pall[6].addEventListener("click", function(){
		document.querySelector(".m-box").style.width = screen.availWidth + "px";
	})

}
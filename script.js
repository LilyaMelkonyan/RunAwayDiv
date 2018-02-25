var arr = ["Catch me", "Try again...", "Try...", "Oops...",]
		
document.addEventListener('mouseover', function(e){
	var div = document.getElementById('main');
	var p = document.getElementById('p');
		// console.log(e.movementY);
		// console.log(e.movementX + "x");

	var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6); 
	var content=Math.round(Math.random()*(arr.length-1));

	var x = window.innerWidth - 130;
	var y = window.innerHeight - 130;
	
	div.style.top = (Math.random()*y)+"px";
	div.style.left = (Math.random()*x)+"px";
	div.style.backgroundColor = color;
	p.innerHTML = arr[content];

})
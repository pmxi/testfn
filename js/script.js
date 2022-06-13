//make image #spinning move around screen
var spinning = document.getElementById("moving");
var spin = function(){
	spinning.style.left = Math.random()*window.innerWidth + "px";
	spinning.style.top = Math.random()*window.innerHeight + "px";
	setTimeout(spin, 1000);
}

spin()


var start;
var stop;
var speed=250;
var index = 0;
var timer = null;
var currentAnimationValue;
function begginAnimation(){
	var animationchange = document.getElementById("animations");
	var currentAnimationValue =animationchange.value;
	var contents= ANIMATIONS[currentAnimationValue];
	document.getElementById("display").value = contents;
	var split=contents.split("=====\n");
	var frameLength = split.length;
	timer=setInterval(frames,speed,split,frameLength);
	
}

function changeAnimation(){
var animationchange = document.getElementById("animations");
var currentAnimationValue =animationchange.value;
document.getElementById("display").value = ANIMATIONS[currentAnimationValue];

}
function frames(split,frameLength){
    var displayBox=document.getElementById("display");
    displayBox.value=split[index];
    index++;
    if (index === frameLength){
    	index=0;
    }
    
}

function loadWindow(){
	let animationchange = document.getElementById("animations");
	let startAnimation = document.getElementById("start");
	startAnimation.onclick = begginAnimation;
    animationchange.onchange=changeAnimation;
}

window.onload=loadWindow;
let startAnimation;
let stop;
let speed=250;
let index = 0;
let timer = null;
let currentAnimationValue="";
let animationchange = null;
var maxSpeed;

function begginAnimation(){
	menuControl("start");
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
function stopAnimation(){
	menuControl("stop");
	var displayBox = document.getElementById("display");
	displayBox.value = currentAnimationValue;
	
	if (timer!=null){
		clearInterval(timer);	
	}
	timer = null;
	index = 0;
	currentAnimationValue="";

}

function changeSize(){
	var sizechange = document.getElementById("size");
	var displayBox = document.getElementById("display");
	var size = sizechange.value;
	if(size ==="Tiny"){
		displayBox.style.fontSize= "7pt";
	}
	else if(size ==="Small"){
		displayBox.style.fontSize= "10pt";
	}
	else if(size ==="Medium"){
		displayBox.style.fontSize= "12pt";
	}
	else if(size ==="Large"){
		displayBox.style.fontSize= "16pt";
	}
	else if(size ==="Extra Large"){
		displayBox.style.fontSize= "24pt";
	}
	else if(size ==="XXL"){
		displayBox.style.fontSize= "32pt";
	}
}

function turboSpeed(){
    if(maxSpeed.checked){
    	speed=50;
    }
    else if(!maxSpeed.checked){
    	speed=250;
    }
	
}
function menuControl(current) {
        if (current === 'start') {
            startAnimation.disabled = true;
            stop.disabled = false;
            animationchange.disabled = true;
        }
        else if (current === 'stop') {
            startAnimation.disabled = false;
            stop.disabled = true;
            animationchange.disabled = false;
 
        }
 
}
function loadWindow(){
	startAnimation = document.getElementById("start");
	startAnimation.onclick = begginAnimation;

	stop = document.getElementById("stop");
	stop.onclick = stopAnimation;

	animationchange = document.getElementById("animations");
    animationchange.onchange=changeAnimation;

    var sizechange = document.getElementById("size");
    sizechange.onchange=changeSize;

    maxSpeed = document.getElementById("turbo");
    maxSpeed.onchange =turboSpeed;
}

window.onload=loadWindow;

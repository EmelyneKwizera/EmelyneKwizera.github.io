//"use strict";
function clickOnBigDeco(){
	alert("Hello, world!");
}
function changeFont(){
let textValue = document.getElementById("UItext");
textValue.className ="increaseText";
//textValue.style.fontSize ="24pt";

}
function changePosition(){
	let textValue = document.getElementById("UItext");
	textValue.className ="floatText";

}
function changeBling(){
	alert("You changed bling");
	let checkBling = document.getElementById("bling");
	let textValue = document.getElementById("UItext");
	if(checkBling.checked){
		textValue.className ="boldBling";
	}
	else{
		textValue.className ="normalBling";
	}

}

function increaseExistingSize(){
	intervalID = setInterval(function(){
	let textValue = document.getElementById("UItext");
	changeFont();
	changePosition();
	let styleValue= window.getComputedStyle(textValue).getPropertyValue('font-size');
	textValue.style.fontSize =parseInt(styleValue)+2+"pt" ;}, 500);
}
function removeInterval(){
	clearInterval(intervalID);
}

function loadButton(){
	//when we click on the button do the following
	let bigDeco=document.getElementById("bigDecol");
	let clear =document.getElementById("clear");


	/*Hello word*/
	//bigDeco.onclick=clickOnBigDeco;

	/*change the font size to 24pt*/
	//bigDeco.onclick = changeFont;

	/*change the text position*/
	//bigDeco.onclick = changePosition;

	/*Increase the textsize and have a timer*/
	bigDeco.onclick= increaseExistingSize;
	clear.onclick = removeInterval;

	//when we check the bling box do the following

	let blingChange = document.getElementById("bling");
	blingChange.onchange = changeBling;
}

window.onload = loadButton;

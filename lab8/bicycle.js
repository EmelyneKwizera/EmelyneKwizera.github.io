(function(){
	var createBicyclePrototype = function(){
		 return{
		 	speed:0,
		 	applyBrake:	function(value){this.speed -= value},
		 	speedup:function(value){this.speed += value}
		 }
}
    var createMountainBikeProtoype = function(prototype){
	var newObject = Object.create(prototype)
	newObject.gear = 1;
	newObject.setGear = function(value){
			this.gear = value;
	}
	return newObject;
}
    var start= function(){
	 var bicyclePrototype = new createBicyclePrototype();
	var mountainBikePrototype=createMountainBikeProtoype(bicyclePrototype);  
	return mountainBikePrototype;                                               

} 
var val1 = createBicyclePrototype();
val1.speedup(10);
console.log(val1.speed);
val1.applyBrake(5);
var val2 = createMountainBikeProtoype(val1)
val2.setGear(2);
val2.speedup(2);
console.log(val2);
var val3 = start();
val3.speedup(6);
val3.setGear(5);
console.log(val3);

})();
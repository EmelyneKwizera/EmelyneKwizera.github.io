(function(){
	function Bicycle(){
		this.speed=0;
	}
	Bicycle.prototype.applyBrake = function(value){this.speed -= value};
	Bicycle.prototype.speedup = function(value){this.speed += value};
		 
    function MountainBikePrototype(){
    	Bicycle.call(this);
    	this.gear = 1;
    }
    MountainBikePrototype.prototype = Object.create(Bicycle.prototype);
    MountainBikePrototype.prototype.constructor = MountainBikePrototype;
    MountainBikePrototype.prototype.setGear = function(gear){
    	this.gear = gear;
    }
    var start = function(){
    	var bicycle = new Bicycle();
    	console.log(bicycle);
    	var mountainBikePrototype= new MountainBikePrototype(); 
    	console.log(mountainBikePrototype);
      mountainBikePrototype.speedup(3);
      console.log(mountainBikePrototype);
      mountainBikePrototype.setGear(5);
      console.log(mountainBikePrototype);
    }
    start();

})();
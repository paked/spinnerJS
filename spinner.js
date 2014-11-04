//Spinner is a spinner simulation designed to make probability easier. Originally meant for use in procedural generation

Spinner = function() {
	this.QUATER = .25
	this.HALF = .5

	this.spin = function() {
		var previous = 0;
		var chances = [];
		for (var i = 0; i < arguments.length; i++) {
			oldChance = arguments[i]
			chances.push({from:previous, to:oldChance.value + previous, callback: oldChance.callback})
			previous += oldChance.value
		}

		number = Math.random()

		for(var i = 0; i < chances.length; i++) {
			chance = chances[i]
			if (number > chance.from && number < chance.to) {
				chance.callback()
				return chance.callback
			}
		}

	}
}

var spinner = new Spinner()
spinner.spin({value: spinner.QUATER, callback: function(){console.log("WOO HOO LANDED ON Q1");}}, {value: .75, callback:function(){console.log("HM");}})

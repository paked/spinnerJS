Spinner = function() {
	this.QUARTER = .25
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
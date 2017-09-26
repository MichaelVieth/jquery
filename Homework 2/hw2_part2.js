class Set {
	constructor() {
		this.set = [];
	}
	
	add(item) {
		if (this.set.indexOf(item) < 0 && (typeof item === "string" || typeof item === "number")) {
			this.set.push(item);
			console.log(item + " was added to the set.");
			return true;
		}
		console.log("Item was not added as it either exists in the set, is not a string, or is not a number.");
		return false;
	}
	
	remove(item) {
		if (this.set[item] != null) {
			console.log(item + " was removed from the set.");
			this.set.splice(this.set.indexOf(item), 1);
			return true;
		}
		console.log(item + " was not removed because it does not exist within the set.");
		return false;
	}
	createSet() {
		var set = "{";
		for (var i = 0; i < this.set.length; i++) {
			if (i == this.set.length - 1) {
				set += this.set[i];
			} else {
				set += this.set[i] + ", ";
			}	
		}
		set += "}";
		return set;
	}
}
var test = new Set();
test.add(10101003001001003000);
test.remove(1010100300100100300);
test.add(1);
test.add(1);
test.remove(1);
test.add("test");
test.add({a: 1, b: 2});
console.log(test.createSet());
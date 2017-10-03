function viewModel(){
		this.name = "Anna";
		this.score = ko.observable(0);
		this.imgsrc = "img/434164568_fea0ad4013_z.jpg";
		this.nickname = "NickNames";
		this.incrementcounter = function(){
			this.score(this.score()+1);
		};
		
		/*this.generation = ko.computed(function(){
			return this.score() >= 5 ? "infant" : "child";
			return this.score() >= 10 ? "teen" : "child";
		}, this);*/

//add levels
		this.level = ko.computed(function(){
			var clicks = this.score();
			if(clicks >= 6 && clicks <= 10){
				return "Infant";
			}
			if(clicks >= 11 && clicks <= 15){
				return "Teen";
			}
			if(clicks >= 15 && clicks <= 20){
				return "Adult";
			}
			if(clicks >= 20 && clicks <= 25){
				return "Midlife";
			}
			if(clicks >= 25){
				return "Old";
			}
			else{
				return "Newborn"
			}
		}, this);
//add nicknames
this.nameslist = ko.observableArray(["Cutie","Puppy","Raju"]);
		/*this.nameslist = ko.observableArray([
		{names: "Cutie"},
		{names: "Puppy"},
		{names: "Raju"}]);*/

}

ko.applyBindings(new viewModel());


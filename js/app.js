var cats = function(){

		this.name = "Anna";
		this.score = ko.observable(0);
		this.imgsrc = "img/434164568_fea0ad4013_z.jpg";
		this.nickname = "NickNames";
		this.nameslist = ko.observableArray(["Cutie","Puppy","Raju"]);

		this.level = ko.computed(function(){
			var clicks = this.score();
			if(clicks >= 6 && clicks <= 10){
				return "Infant";
			}
			else if(clicks >= 11 && clicks <= 15){
				return "Teen";
			}
			else if(clicks >= 15 && clicks <= 20){
				return "Adult";
			}
			else if(clicks >= 20 && clicks <= 25){
				return "Midlife";
			}
			else if(clicks >= 25){
				return "Old";
			}
			else{
				return "Newborn"
			}
		}, this);
}

var viewModel = function(){
	var self = this;
	this.currentcat = ko.observable(new cats());

		this.incrementcounter = function(){
		//this.score(this.score()+1);
		self.currentcat().score(self.currentcat().score()+1);
		};
}
	


		



ko.applyBindings(new viewModel());


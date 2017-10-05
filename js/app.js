var initialcats = [{
				name: "Anne",
				imgsrc: "images/cat1.jpg",
				score: 0,
				nameslist: "Anda"
				},
				{
				name: "Beca",
				imgsrc: "images/cat2.jpeg",
				score: 0,
				nameslist: "Balu"
				},
				{
				name: "Cary",
				imgsrc: "images/cat3.jpg",
				score: 0,
				nameslist: "Cutie"
				},
				{
				name: "Dani",
				imgsrc: "images/cat4.jpg",
				score: 0,
				nameslist: "Danger"
				},
				{
				name: "Erie",
				imgsrc: "images/cat5.jpg",
				score: 0,
				nameslist: "English"
				}];


var cats = function(data){

		this.name = ko.observable(data.name);
		this.score = ko.observable(data.score);
		this.imgsrc = ko.observable(data.imgsrc);
		this.nameslist = ko.observableArray(data.nameslist);

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
				return "Newborn";
			}
		}, this);
};

var viewModel = function(){
	var self = this;

	this.catlist = ko.observableArray([]);

	initialcats.forEach(function(catitem){
		self.catlist.push(new cats(catitem));
	});

	this.currentcat = ko.observable(this.cats()[0]);

	this.incrementcounter = function(){
		//this.score(this.score()+1);
		self.currentcat().score(self.currentcat().score()+1);
	};

	this.setcat = function(clickedcat){
		self.currentcat(clickedcat);
	};

};
	
ko.applyBindings(new viewModel());
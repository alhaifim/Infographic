
// const {Dinos} = require('./dino.json');
// Create Dino Constructor
function Dino(species, height, weight, diet, where, when, fact) {
	this.species = species;
	this.height = height;
	this.weight = weight;
	this.diet = diet;
	this.where = where;
	this.when = when;
    this.fact = fact;
    this.image = `images/${species.toLowerCase()}.png`;
}

// Create Dino Compare Method 1: Comparing Height
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareingHeight = function (myHeight) {
	const different = Math.trunc(this.height - myHeight);
	return different > 0
		? `${this.species} was ${different} lbs longer than you !`
		: `${this.species} was ${-different} lbs shorter than you !`;
};

// Create Dino Compare Method 2:  Comparing Weight

Dino.prototype.comparingWeight = function (myWeight) {
	const different = Math.trunc(this.weight - myWeight);

	return different > 0
		? `${this.species} was ${different} lbs having more weigh than you !!`
		: `${this.species} was ${-different} lbs lighter than you !!`;
};

// Create Dino Compare Method 3 : Comparing diet
Dino.prototype.comparingDiet = function (myDiet) {
	if (myDiet === this.diet) {
		return `${this.species} is a ${this.diet}. You both share the same Diet.`;
	} else if (this.diet === "carnivor") {
		return `${this.species} is a ${this.diet}. ${this.species} Could eat you.`;
	} else if (this.diet === "herbavor") {
		return `${this.species} is a ${this.diet}. ${this.species} would love to have more veggies .`;
	} else {
		return `${this.species} is a ${this.diet}. Can you suggest some food.`;
	}
};

// Dino data (copied from dino.json)
const dinosData = [
	{
		species: "Triceratops",
		weight: 13000,
		height: 114,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "First discovered in 1889 by Othniel Charles Marsh",
	},
	{
		species: "Tyrannosaurus Rex",
		weight: 11905,
		height: 144,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "The largest known skull measures in at 5 feet long.",
	},
	{
		species: "Anklyosaurus",
		weight: 10500,
		height: 55,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Anklyosaurus survived for approximately 135 million years.",
	},
	{
		species: "Brachiosaurus",
		weight: 70000,
		height: "372",
		diet: "herbavor",
		where: "North America",
		when: "Late Jurasic",
		fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
	},
	{
		species: "Stegosaurus",
		weight: 11600,
		height: 79,
		diet: "herbavor",
		where: "North America, Europe, Asia",
		when: "Late Jurasic to Early Cretaceous",
		fact:
			"The Stegosaurus had between 17 and 22 seperate places and flat spines.",
	},
	{
		species: "Elasmosaurus",
		weight: 16000,
		height: 59,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
	},
	{
		species: "Pteranodon",
		weight: 44,
		height: 20,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
	},
	{
		species: "Pigeon",
		weight: 0.5,
		height: 9,
		diet: "herbavor",
		where: "World Wide",
		when: "Holocene",
		fact: "All birds are living dinosaurs.",
	},
];


function init() {
	// Creating Dino Objects
	const dinosObjects = dinosData.map(
		(dino) =>
			new Dino(
				dino.species,
				dino.weight,
				dino.height,
				dino.diet,
				dino.where,
				dino.when,
				dino.fact
			)
	);


	// Create Human Object using dino constructor
	const human = new Dino(
		"human",
		60,
		5.5,
		"omnivore",
		"worldwide",
		"now",
		"Humans are the most inteligent species on the planet"
	);

	// Use IIFE to get human data from form
	(function getHumanData() {
		const name = document.getElementById("name").value;
		const weight = document.getElementById("weight").value;
		const height = document.getElementById("feet").value +
		document.getElementById("inches").value / 12;
		const diet = document.getElementById("diet").value.toLowerCase();
		human.name = name;
		human.weight = weight;
		human.height = height
		human.diet = diet;
	})();

    //Validating All Fields 

	if(!validateInput(human.name, human.height, human.weight)){
		alert("Missing required Fields")
		return;
	}

	// Adding human object to fourth index in dinoObjects array
	dinosObjects.splice(4,0,human);

	// Creating tiles for each Dino in Array
	const tiles = dinosObjects.map((dino) => {
		const documentFragment = document.createDocumentFragment();
		const containerDiv = document.createElement("div");
		containerDiv.className = "grid-item";

		const image = document.createElement("img");
		image.src = dino.image;

		const title = document.createElement("h3");
		const fact = document.createElement("p");
       
        if (dino.species === "Pigeon") {
			title.innerHTML = dino.species;
			fact.innerHTML = dino.fact;
		}
		 else if (dino.species === "human") {
			title.innerHTML = human.name;
		}  else {
			title.innerHTML = dino.species;
			fact.innerHTML = (_=> {
				let result = "";
				// Creating random number to choose a fact from switch
				const randomise = getRandomInt(8);

				switch (randomise) {
					case 1:
						result = dino.comparingHeight(human.height);
						break;
					case 2:
						result = dino.comparingWeight(human.weight);
						break;
					case 3:
						result = dino.comparingDiet(human.diet);
						break;
					case 4:
						result = `The ${dino.species} lived in ${dino.where}.`;
						break;
					case 5:
						result = `The ${dino.species} was found in ${dino.when}.`;
						break;
					default:
						result = dino.fact;
						break;
				}
				return result;
			})();
		}
		containerDiv.appendChild(title);
		containerDiv.appendChild(image);
		containerDiv.appendChild(fact);
		documentFragment.appendChild(containerDiv);

		return documentFragment;
	});


	// Add tiles to DOM
	const grid = document.getElementById("grid");
	tiles.forEach(tile=>grid.appendChild(tile))
	
	// Remove form from screen
	document.getElementById('dino-compare').innerHTML = "";
}

// Valdiating Input
const validateInput=(name, height, weight)=>{
	return name.length && height.length && weight.length
}

// Get random number
function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

// On button click, prepare and display infographic
const submitButton = document.querySelector("#btn");

submitButton.addEventListener("click", init);
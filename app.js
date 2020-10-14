
const dinoDataFile = require('./dino.json');

   // Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = `images/${species.toLowerCase()}.png`;
}


// Create Dino Objects
// const DinoObject = dinoDataFile.map((d) => {return new Dino(d);});
//console.log(DinoObject);

	// Create Dino Objects
	const dinoObjects = dinoDataFile.Dinos.map(
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
console.log(dinoObjects);

    // Create Human Object
    const humanObject = new Dino('Human', 85, 179, 'Omnivore', 'Everywhere', 'At this moment','Humans are OK')

    // Use IIFE to get human data from form
    (function getHumanData() {
		const name = document.getElementById("name").value;
		const height = document.getElementById("feet").value +
        document.getElementById("inches").value / 12;
        const weight = document.getElementById("weight").value;
		const diet = document.getElementById("diet").value.toLowerCase();
		human.name = name;
		human.weight = weight;
		human.height = height
		human.diet = diet;
	})();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
// const submitBtn = document.querySelector("#btn");

// submitBtn.addEventListener("click", init);
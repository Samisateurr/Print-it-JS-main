

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},

];

let currentIndex = 0;


let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let slide = document.querySelector(".banner-img");
let text = document.querySelector(".banner-txt");


// Rassemble les dots dans une meme liste
const dotList = document.querySelectorAll(".dot");

// Source des images
let srcImage = "./assets/images/slideshow/";



// EventListener pour les fleches


leftArrow.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur la fleche de gauche")
	console.log(slides[0].image)
	//test
	let currentDotid = "dot" + currentIndex;
	currentIndex = currentIndex - 1;

	let imageName = slides[currentIndex].image

	let imagePath = "./assets/images/slideshow/" + imageName;

	slide.src = imagePath;

	let tagName = slides[currentIndex].tagLine
	console.log(tagName)

	text.innerHTML = tagName

	function updateDots(index) {
		dotList.forEach((dot, i) => {
			dot.classList.remove("dot_selected");
			if (i === index) {
				dot.classList.add("dot_selected");
			}
			// retour a la premiere slide
			if (currentIndex === 3) {
				currentIndex = 0 - 1;
			}
		});
	}

	updateDots(currentIndex);



});


rightArrow.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur la fleche de droite");
	//incrementer index
	let currentDotid = "dot" + currentIndex;
	console.log(currentDotid)
	currentIndex = currentIndex + 1;
	if (currentIndex >= slides.length) { currentIndex = 0 }
	console.log(currentIndex)
	//recuperer nom img
	let imageName = slides[currentIndex].image
	console.log(imageName)
	//construire chemin img
	let imagePath = "./assets/images/slideshow/" + imageName;
	console.log(imagePath)
	//changer source img
	slide.src = imagePath;
	//recuperer txt
	let tagName = slides[currentIndex].tagLine
	console.log(tagName)
	//changer txt
	text.innerHTML = tagName
	//changer bullet point
	function updateDots(index) {
		dotList.forEach((dot, i) => {
			dot.classList.remove("dot_selected");
			if (i === index) {
				dot.classList.add("dot_selected");
			}
			// retour a la premiere slide
			
		});
	}

	updateDots(currentIndex);

	
});




// EventListener pour les bullet points


dot0.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur le premier bullet point (img 1)")
});


dot1.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur le deuxieme bullet point (img 2)")
});


dot2.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur le troisieme bullet point (img 3)")
});


dot3.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur le quatrieme bullet point (img 4)")
});










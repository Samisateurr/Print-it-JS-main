

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

const dotContainer = document.getElementById("dotContainer");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let slide = document.querySelector(".banner-img");
let text = document.querySelector(".banner-txt");


// Rassemble les dots dans une meme liste
const dotList = document.querySelectorAll(".dot");

// Source des images
let srcImage = "./assets/images/slideshow/";

// Pour definir la fonction updateSlide
function updateSlide(index) {
    let imageName = slides[index].image;
    let imagePath = srcImage + imageName;
    slide.src = imagePath;

    let tagName = slides[index].tagLine;
    text.innerHTML = tagName;
}

// Ajouter les points dynamiquement
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
		if (i === 0) {
            dot.classList.add("dot_selected"); // Ajouter la classe active au premier point
        }
        dotContainer.appendChild(dot);
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlide(currentIndex);
        });
    }
}

// Changement de class pour le Dot actif
function updateDots(index) {
    dotList.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}



// EventListener pour les fleches
leftArrow.addEventListener("click", function (event) {
	console.log("Vous avez cliqué sur la fleche de gauche")
	console.log(slides[0].image)
	//test
	let currentDotid = "dot" + currentIndex;
	currentIndex = currentIndex - 1;
	if (currentIndex < 0) {currentIndex = slides.length - 1;}
	console.log(currentIndex)

	let imageName = slides[currentIndex].image

	let imagePath = "./assets/images/slideshow/" + imageName;

	slide.src = imagePath;

	let tagName = slides[currentIndex].tagLine
	console.log(tagName)

	text.innerHTML = tagName

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

	updateDots(currentIndex);
	
});

// Initial load
createDots();
updateSlide(currentIndex);
updateDots(currentIndex);














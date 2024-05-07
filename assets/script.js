const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indexSlidesActif = 0; 

// Flèche Gauche
const baliseFlecheGauche = document.querySelector(".arrow_left");
baliseFlecheGauche.addEventListener("click",function () {
	indexSlidesActif = indexSlidesActif - 1;         //  2 manière de l'écrire  ou = indexslidesactif--

	if  (indexSlidesActif < 0) {
		indexSlidesActif = slides.length -1 ;    // largeur du tableu -1 
	}
	updateImageText(indexSlidesActif);
	updateDotSelected(indexSlidesActif);
});

// Flèche Droite
const baliseFlecheDroite = document.querySelector(".arrow_right");
baliseFlecheDroite.addEventListener("click", function() {
	indexSlidesActif = indexSlidesActif +1;

	if (indexSlidesActif > (slides.length -1)) {
		indexSlidesActif = 0;
		
	}
	updateImageText(indexSlidesActif); 
	updateDotSelected(indexSlidesActif);
});

// Bullets Points 
document.addEventListener("DOMContentLoaded", function () {
let divDots = document.querySelector(".dots");

let ol = document.createElement("ol");
ol.style.display = "flex";
for (let i = 0; i < slides.length; i++) {
    let li = document.createElement("li");
    li.className = "dot";
    if (i === 0) {
        li.classList.add("dot_selected");  
    }
    ol.appendChild(li);
}
divDots.appendChild(ol);
});

// Changement d'images et de textes
function updateImageText (index) {
	const image = document.querySelector('#banner .banner-img');
    const text = document.querySelector('#banner p');
	let newImage = slides[index].image;   
	let newText = slides[index].tagLine;   
	image.src = newImage; 
	text.innerHTML = newText; 
}

// Passage de "dot_selected" d'une "dot" à l'autres
function updateDotSelected(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
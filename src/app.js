var modalProyecto1 = document.getElementById('modal-proyecto1')
var modalProyecto2 = document.getElementById('modal-proyecto2')

var abrirProyecto1 = document.getElementById('abrir-proyecto1')
var abrirProyecto2 = document.getElementById('abrir-proyecto2')
var abrirProyecto3 = document.getElementById('abrir-proyecto3')
var abrirProyecto4 = document.getElementById('abrir-proyecto4')

var slideIndex = 1;


function cerrarModalProyecto() {
	modalProyecto1.style.display = 'none'
	modalProyecto2.style.display = 'none'

	slideIndex = 1
}


// Next/previous controls
function plusSlides(n, nombreClase) {
  showSlides(slideIndex += n, nombreClase);
}

// Thumbnail image controls
function currentSlide(n, nombreClase) {
  showSlides(slideIndex = n, nombreClase);
}


function showSlides(n, nombreClase) {
  var i;
  var slides = document.getElementsByClassName(nombreClase);
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}
	


abrirProyecto1.addEventListener('click', function () {
	modalProyecto1.style.display = 'block'

	showSlides(slideIndex, "slides-1");
})

abrirProyecto2.addEventListener('click', function () {
	modalProyecto2.style.display = 'block'

	showSlides(slideIndex, "slides-2");
})





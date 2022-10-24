let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}

var num

function ApiPokemon() {

  num = prompt("Ingresá un numero del 1 al 20")
  fetch('https://pokeapi.co/api/v2/pokemon/' + num)
    .then((response) => response.json())
    .then((data) => {


      var nombre = document.getElementById("nombrePokemon");
      var imagen = document.getElementById("imagenPokemon")
      imagen.innerHTML = '<img src="' + data.sprites.front_default + '">'
      nombre.innerHTML = "Tu Pokemon elegido es: <b>" + data.name + "</b>";
    });
 
}
  let pokestrella = 0
function pokemonPromo() {
  pokestrella = Math.floor(Math.random() * 21)
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokestrella)
    .then((response) => response.json())
    .then((data) => {

      var nombre2 = document.getElementById("nombrePokemon2");
      var imagen2 = document.getElementById("imagenPokemon2")
      imagen2.innerHTML = '<img src="' + data.sprites.front_default + '">'
      nombre2.innerHTML = "El Pokemon Muy Burguer Estrella es: <b>" + data.name + "</b>";
    });
    
}
function resultado() {
  ApiPokemon()
  pokemonPromo()
}
      
      
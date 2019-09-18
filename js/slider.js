// This sets the variable to one because we need to loop around to the end //
var slideIndex = 1;
showSlides(slideIndex);

// This allows you to click slides to scroll from one to the other//
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//This makes the slides and dots appear on the page//
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("quoteContent");
  var dots = document.getElementsByClassName("dot");

//This makes the slide go back to one if the number you are supposed to go to next is greater than the number of slides//
  if (n > slides.length) {
    slideIndex = 1;
  }

//This makes the slide go back to the last slide if the number you are supposed to go to next is less than one//
  if (n < 1) {
    slideIndex = slides.length
  }

//This makes the slides that you aren't on not appear on the page//
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

//This unhighlights the dot for the slides that you are not on//
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
  }

//Whenever you get to the slide you're on, it displays it as block and fades because of the CSS function//
  slides[slideIndex-1].style.display = "block";

//This puts the active class on whatever dot you're on//
  dots[slideIndex-1].className += " active";
}

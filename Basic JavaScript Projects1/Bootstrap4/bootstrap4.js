
document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
}
);
function validateForm () {
    let x = document.forms["myform"]["email"].value;

    if (x == "") {
        alert("Please provide your email");
        return false;
    }}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  }, 3000);
  
  let slideIndex =1;
  showSlides(slideIndex);

  function plusSlides(n)  {
    showSlides(slideIndex += n);
  } 

  function currentSlide(n)  {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides =document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)  {
      dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
  }
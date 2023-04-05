// Bagian Animasi Scroll

function aroma() {
  var model = document.querySelectorAll(".aroma");

  for (var i = 0; i < model.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = model[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      model[i].classList.add("active");
    } else {
      model[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", aroma);

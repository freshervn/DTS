      var slideIndex = 0;
      var slides = ["images/home/slider2_u1.jpg","images/home/slider1_u22.jpg", "images/home/slider3_u2.jpg"];
      function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) { slideIndex = slides.length - 1 };
        if (slideIndex >= slides.length) { n = 0 };
        showSlides(slideIndex);
      }
      function showSlides(slideIndex) {
        document.getElementsByClassName("overview")[0].setAttribute("style", "background-image: url(" + slides[slideIndex] + ");background-size: cover;");
      }
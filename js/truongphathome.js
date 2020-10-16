      // nextslide
      var slideIndex = 0;
      var slides = ["img/slider2_u1.jpg","img/slider1_u22.jpg", "img/slider3_u2.jpg"];
      function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) { slideIndex = slides.length - 1 };
        if (slideIndex >= slides.length) { n = 0 };
        showSlides(slideIndex);
      }
      function showSlides(slideIndex) {
        document.getElementsByClassName("overview")[0].setAttribute("style", "background-image: url(" + slides[slideIndex] + ");background-size: cover;");
      }
      // textarea autoresize
      $(function(){
        var textArea = $('#content'),
        hiddenDiv = $(document.createElement('div')),
        content = null;

        textArea.addClass('noscroll');
        hiddenDiv.addClass('hiddendiv');

        $(textArea).after(hiddenDiv);

        textArea.on('keyup', function(){
          content = $(this).val();
          content = content.replace(/\n/g, '<br>');
          hiddenDiv.html(content + '<br class="lbr">');
          $(this).css('height', hiddenDiv.height());
        });
      });
      

      

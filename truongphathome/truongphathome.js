      // nextslide
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
     
     //       
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
      

      

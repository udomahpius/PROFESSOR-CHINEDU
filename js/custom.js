
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);




  // javascript
  // gallery

  document.querySelector(".date").innerHTML = new Date().getFullYear()


let fullImags = document.getElementById("fullimg");
let full_Imags = document.getElementById("full-img");
function openImg(pic) {
  full_Imags.style.display = "flex"
  fullImags.src = pic
} 
function closeImg(pic) {
  full_Imags.style.display = "none"
} 








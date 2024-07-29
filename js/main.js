$(function(){

  $(".menu a, .footer__end a, .hero__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.burger, .menu__list a').on('click',function(){
      $('.menu__list').toggleClass('menu__list--active');
      $('.burger').toggleClass('burger--active');  
    });

    var mixer = mixitup('.works__content'); 
    
    window.onscroll = function showHeader() {
      var header = document.querySelector('.header');
      if(window.pageYOffset > 100) {
         header.classList.add('header-fixed');
      } else{
        header.classList.remove('header-fixed');
      }
    }
});


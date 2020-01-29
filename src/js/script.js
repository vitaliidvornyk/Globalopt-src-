$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1000,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/rigth.svg"></button>'
	});
});

// $(window).on( 'load', function() {
//     $('html, body').animate({scrollTop : 0});
// });
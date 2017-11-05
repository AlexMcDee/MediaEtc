//unhide after init
document.querySelector('body').className = "";

$(document).ready(function(){
	// Create a variable
	var $introleft = $('.intro .before');
	var $introright = $('.intro .after');
	var $abbr = $('.abbr');
	var $introbutton = $('.intro .button');
	//var $intro = $('.intro');

	// Create a tween
	//var tween = TweenLite.from($introleft, 1, {autoAlpha: 0, y: -100, x: -50, ease: Power1.easeOut, delay: 0.5});
	//var tween = TweenLite.from($introright, 1, {autoAlpha: 0, y: 100, x: 50, ease: Power1.easeOut, delay: 0.5});
	//var tween = TweenLite.from($abbr, 1, {autoAlpha: 0, y: 20, ease: Power1.easeOut, delay: 1});
	var tween = TweenLite.from($introbutton, 2, {autoAlpha: 0, scale: 0.2, ease: Elastic.easeOut.config(2, 1), delay: 2});

  $('#image-gallery').lightSlider({
      gallery:true,
      item:1,
			pauseOnHover:true,			
			gallery:false,
      slideMargin: 0,
      speed:500,
      auto:true,
      loop:true,
			//autoWidth:true,
      onSliderLoad: function() {
          $('#image-gallery').removeClass('cS-hidden');
      }
  });
});

//scroll to anchor
$(function() {
	$('a[href="#about"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$('a[href="#intro"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$('a[href="#terms"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$('a[href="#gogetit"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

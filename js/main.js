$(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		startPosition: 0,
		navText: ['<img src="img/arrow-left.svg">', '<img src="img/arrow-right.svg">'],
		responsive:{
			 0:{
				  items:1
			 },
			 600:{
				  items:1
			 },
			 1000:{
				  items:1.35
			 }
		}
  });
});
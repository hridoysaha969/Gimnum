// Initialize the slider
  $(document).ready(function(){

  	 $('#menu').slicknav();

  	//  ==== SLIDER ====
    $('.slider').bxSlider();


    // SCROLL TOP BUTTON
	  $.scrollUp({
	    scrollName: 'scrollUp', // Element ID
	    topDistance: '300', // Distance from top before showing element (px)
	    topSpeed: 500, // Speed back to top (ms)
	    animation: 'fade', // Fade, slide, none
	    animationInSpeed: 200, // Animation in speed (ms)
	    animationOutSpeed: 200, // Animation out speed (ms)
	    scrollText: 'Top', // Text for element
	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  }); 

  });
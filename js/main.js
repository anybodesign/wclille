jQuery(document).ready(function($) {
	
	
// Responsive Main Menu  // not used yet...

/*
	$('#menu-toggle').click(function() {
		$('.main-menu').slideToggle();
		$(this).toggleClass('menu-opened');
			
			if ($(this).hasClass('menu-opened')) {
				$('.main-menu').attr('aria-expanded','true');
			} else {
				$('.main-menu').attr('aria-expanded','false');
			}
			
		return false;
	});

		$(window).resize(function() {
			if ($(window).width() > 640) {
		    	$('.main-menu').show().removeAttr('style').removeAttr('aria-expanded');
		    	$('.sub-menu').show().removeAttr('style');
		    	$('#menu-toggle').removeClass('menu-opened');
			}
		});
*/

	
// Sliders
	
	$('.slicky-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
	
	$('.slicky-slider-dark').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		nextArrow: '<button type="button" class="slick-next" aria-label="Panneau suivant">Panneau suivant</button>',
		prevArrow: '<button type="button" class="slick-prev" aria-label="Panneau précédent">Panneau précédent</button>'
	});
	
	$('.slick-dots button').prepend("Panneau ");
		

	
// Transcript
	
	$('.show-transcript').click(function() {
		$('.transcript').slideToggle();
		$(this).toggleClass('transcript-opened');

			if ($(this).hasClass('transcript-opened')) {
				$(this).attr('aria-expanded','true');
			} else {
				$(this).attr('aria-expanded','false');
			}
		
		
		return false;
	});


// Info bulle
	
	$('.info-bulle-trigger').click(function() {
		$(this).next('.info-bulle').addClass('bulle-opened');
		$(this).toggleClass('trigger-opened');

			if ($(this).hasClass('trigger-opened')) {
				$(this).attr('aria-expanded','true');
				$(this).next('.info-bulle').addClass('bulle-opened');
				$('#wrapper').addClass('overlay');
			} else {
				$(this).attr('aria-expanded','false');
				$(this).next('.info-bulle').removeClass('bulle-opened');
				$('#wrapper').removeClass('overlay');
			}
	});	
	
	$('.info-bulle-close').click(function() {
		$('.info-bulle-trigger').attr('aria-expanded','false').removeClass('trigger-opened');
		$('.info-bulle').removeClass('bulle-opened');
		$('#wrapper').removeClass('overlay');
	});	
	
	
// Smooth scroll
// https://css-tricks.com/snippets/jquery/smooth-scrolling/


	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          }
	        });
	      }
	    }
	  });	


// Menu Class on Scroll

	var $offset = 64;
		
	function onScroll() {

	    var scrollPos = $(document).scrollTop();
	    
	    $('.main-menu a').each(function () {
	        
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        
	        if (refElement.position().top-$offset <= scrollPos && refElement.position().top-$offset + refElement.height() > scrollPos) {
	           
	            $('.main-menu a').parent().removeClass("active");
	            currLink.parent().addClass("active");
	            //window.location.hash = this.hash;
	        
	        } else {
	           
	            currLink.parent().removeClass("active");
	            
	        }
	    });
	}
    $(document).on("scroll", onScroll);

	  
  
  
// Contrast

    // Check (onLoad) if the cookie is there and set the class if it is
    
    if ($.cookie('highcontrast') === "yes") {
        $("body").addClass("highcontrast");
    }
    
    // When the element is clicked
   
    $(".toggle-highcontrast").click(function () {
        
        if ($.cookie('highcontrast') === "undefined" || $.cookie('highcontrast') === "no") {
           
            $.cookie('highcontrast', 'yes', {
                expires: 7,
                path: '/'
            });
            $("body").addClass("highcontrast");
        
        } else {

            $.cookie('highcontrast', 'yes', {
                expires: 7,
                path: '/'
            });
            $("body").addClass("highcontrast");
            
        }
    });
    
    $(".toggle-remove").click(function () {
        $('body').removeClass('highcontrast');
        if ($.cookie('highcontrast') === "yes") {
            $.cookie("highcontrast", null, {
                path: '/'
            });
        }
    });	
  
  
/**	
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
	( function() {
		var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
		    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
		    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;
	
		if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
			window.addEventListener( 'hashchange', function() {
				var id = location.hash.substring( 1 ),
					element;
	
				if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
					return;
				}
	
				element = document.getElementById( id );
	
				if ( element ) {
					if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
						element.tabIndex = -1;
					}
	
					element.focus();
				}
			}, false );
		}
	})();
	

});
$(document).ready(function() {
	$('#map-overlay').click(function() {
		$(this).hide();
	});
	$(document).scroll(function() {
		if ($('#map-overlay').css("display")==="none") {
			$('#map-overlay').show();
		}
	});
	$('.login').click(function() {

	});
    //------------------ load transitions
	    //--------------------AKGEC logo transition
		    var timer = setTimeout(function() {
		        $('.akgec-logo').animate({
		            'opacity': '1'
		        }, 500);
		    }, 600);
		    cycle_sponsors();
		    //cycle_logos();

    	//----------------Sponsor Text-transition
		    function cycle_sponsors() {
		    	var sponsors = ['Ajay Kumar Garg Engineering College', 'Ghaziabad District Table Tennis Association'];
			    var i = 0;
			    var Sponsor_timer = self.setInterval(function() {
			        if (i) {
			            i = 0;
			        } else {
			            i = 1;
			        }
			        $('.sponsors').animate({
			            'opacity': 0
			        }, 1000, function() {
			            $('.sponsors').text(sponsors[i]);
			            $('.sponsors').animate({
			                'opacity': '1'
			            }, 1000);
			        });
			    }, 5000);
		    }

		//---------------- Logo Transition
			/*function cycle_logos(){
				var logos = ['akgec', 'logo'];
				var i = 0;
			    var logo_timer = self.setInterval(function() {
			        if (i) {
			            i = 0;
			        } else {
			            i = 1;
			        }
			        $('.akgec-logo').animate({
			            'opacity': 0
			        }, 1000, function() {
			            $('.akgec-logo img').attr('src','./images/'+logos[i]+'.png');
			            $('.akgec-logo').animate({
			                'opacity': '1'
			            }, 1000);
			        });
			    }, 5000);
			}*/

    //---------------menu cilck
	    $('.menu li a').click(function() {
	        $('.menu li a').removeClass('active');
	        $(this).addClass('active');
	        $('.active').find('span').css("background-color","#333 !important");
	    });

	//---------------manual scroll menu highlight
    /*var sections = {},
        _height  = $(window).height(),
        i        = 0;

    // Grab positions of our sections 
    $('.full-page-div').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var pos = $(this).scrollTop()+190;

        // Look in the sections object and see if any section is viewable on the screen. 
        // If two are viewable, the lower one will be the active one. 
        for(i in sections){
        	//console.log("sec"+sections[i]);
            if(pos >= sections[i] && sections[i] < pos + _height){
                $('.active').removeClass('active');
                $('#'+i).addClass('active');
            }  
        }
    });*/

    //---------------smooth scroll to page
	    $(function() {
	        $('a[href*=#]:not([href=#])').click(function() {
	            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

	                var target = $(this.hash);
	                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                var scrollTo = target.offset().top;
	                if (target.length) {
	                    if (scrollTo > 200) {
	                        scrollTo -= 55;
	                    } else {
	                        scrollTo = -20;
	                    }
	                    $('html,body').animate({
	                        scrollTop: scrollTo
	                    }, 1000);
	                    return false;
	                }
	            }
	        });
	    });

    //------------------ menu resize in scroll
	    var pos = parseInt($('.menu-container').css('margin-left').replace('px', '')) + (parseInt($($('.menu li')[0]).css('width').replace('px', '')) / 2) + parseInt($($('.menu li')[0]).css('padding-left').replace('px', '')) * 2;
	    $('.cursor').css('margin-left', pos + 'px');
	    $(document).scroll(function() {
	        if ($(document).scrollTop() > 200) {
	            $('.nav').addClass('nav-small');
	            $('.title').hide();
	            $('.login').hide();
	            $('.menu li').css("font-size",'1.3rem');
	            $('.menu-container').addClass('menu-container-small');
	            $('.cursor-container').addClass('cursor-container-small');
            	$('.logo-container').fadeOut('slow', function() {
            		$('.title-left').css("display", "block");
            	});
	            
	        };
	        if ($(document).scrollTop() < 190) {
	            $('.nav').removeClass('nav-small');
	            $('.title').show();
	            $('.menu-container').removeClass('menu-container-small');
	            $('.menu li').css("font-size",'1.5rem');
	            $('.cursor-container').removeClass('cursor-container-small');
	            $('.title-left').fadeOut(100, function() {
            		$('.logo-container').fadeIn();
            	});
            	$('.login').show();
	        }
	    });
	//------------------ menu cursor position
	    var width = 0;
	    var index;
	    var obj;
	    $('.menu li a').click(function() {
	        var left = 0;
	        var offset = 42;
	        var right = 0;
	        var left = parseInt($('.menu-container').css('margin-left').replace('px', ''));
	        obj = $(this).parent();
	        index = parseInt(obj.index());
	        i = 0;
	        while (i < index) {
	            offset += parseInt($($('.menu li')[i]).css('width').replace('px', ''));
	            offset += parseInt($($('.menu li')[i]).css('padding-left').replace('px', '')) * 2;
	            i++;
	        }
	        right = parseInt($(this).css('width').replace('px', ''));
	        pos = left + offset;
	        offset = right / 2;
	        pos += offset;
	        $('.cursor').animate({
	            'margin-left': pos + 'px'
	        }, 200);
	    });
});

	
	
	$(document).ready(function(){
		
		
		$(document).keypress(function(e){
			console.log(e.which);
			if (e.which == 119){
				window.location.href="portfolio.html";
			}else if (e.which == 115){
				window.location.href = "story.html";
			}else if (e.which == 106){
				window.location.href = "index.html";
			}
		});
		
		$("textarea").keypress(function(e){
			e.stopPropagation();
		});
		
		$("#show_nav").bind("click", function(){
			$(this).toggleClass("selected");
			$("#show_social_media").removeClass("selected")
			$("div.social_media").toggle(false);
			$("#masthead nav ul").toggle(200);
			
			
		});
		
		$("#show_social_media").bind("click", function(){
			$(this).toggleClass("selected");
			$("#show_nav").removeClass("selected");
			$("#masthead nav ul").toggle(false);
			$("div.social_media").toggle(200);
		});
		
		//when the menu item for the current page is clicked, just collapse/expand the menu
		$('.current_menu_selection').bind("touchstart", function(e){
			e.preventDefault();
			e.stopPropagation();
			$('#masthead nav ul').toggleClass('menu_collapsed');
		});
		
		//links inside price tag list items don't trigger on the first touch
		$('li[data-price] a').bind('touchend', function(e){
			e.preventDefault();
		});
		
		//when we touch a price tag list item, we set focus on it so that the second time it's touched, we follow the link
		$('li[data-price]').bind('touchend', function(){
			
			if ($(this).hasClass('focus')){
				if ($(this).children('a').length > 0)	window.location = $(this).children('a').attr('href');
			}else{
				$('.focus').removeClass('focus');
				$(this).addClass('focus');
			}
			
		});
		
		$('.min_button, .min_button:after').bind('touchend', function(e){
			e.preventDefault();
			e.stopPropagation();
			$('#masthead nav ul').toggleClass('menu_collapsed');
		});
		
		
		
		$("[data-chunk]").on("click", function(e){
			e.preventDefault();
			$(".perm_highlight").removeClass("perm_highlight");
			var id = $(this).attr("data-chunk");
			$("#" + id+ " h2").addClass('perm_highlight');
			 $('html, body').animate({
				 scrollTop: $("#"+id).offset().top
			 }, 200);
		});
		
		$("[data-chunk]").on("mouseover", function(e){
			var id = $(this).attr("data-chunk");
			$("#" + id+ " h2").addClass('highlight');
		});
		
		$("[data-chunk]").on("mouseout", function(e){
			var id = $(this).attr("data-chunk");
			$("#" + id+ " h2").removeClass('highlight');
		});
	});
$(function(){

	$('.t-shop-user-tabs__tab').click(function(){
		$('.t-shop-user-tabs__tab').removeClass('t-shop-user-tabs__tab-active')
		$(this).addClass('t-shop-user-tabs__tab-active');

		$('.t-shop-user-slider-carousel').removeClass('t-shop-user-slider-carousel_active');
		$('.t-shop-user-slider-carousel')
		.eq($(this).attr("data-slider-number"))
		.addClass('t-shop-user-slider-carousel_active');
	});

	setTimeout(function () {
		$('#t-shop-user-slider-carousel-1').owlCarousel({
			navigation : true, 
			items: 1,
			loop: true
			
		}, 1150);
	});
	setTimeout(function () {
		$('#t-shop-user-tovari-category-recomendation__carousel').owlCarousel({
			items: 5,
			loop: true,
			nav: true, 
			dots: true
		})	
	},1000);

	function gigieneBar(){
		var barAll = $(".t-gigiena-bar-span__all").text();
		barAll = barAll.replace(/\s+/g,'');
		var barActive = $(".t-gigienabar-span__active").text();
		barActive = barActive.replace(/\s+/g,'');
		var barWidth = barActive/barAll*95;
		$(".t-gigiena-bar__active").width(barWidth + "%");
	}
	gigieneBar();

	function gigienaItemBar(){
		$(".t-uchastie-program-party-item").each(function(index){
			var barNow = $(this).find(" .t-gigiena-another-projects-bar .t-uchastie-program-party-item-des-3__span-1 span").attr("data-soti-have");
			barNow = parseInt(barNow)
			//console.log(index + " - barAll: " + barNow);
			var barNeed = $(this).find(" .t-gigiena-another-projects-bar .t-uchastie-program-party-item-des-3__span-2 span").attr("data-soti-need");
			barNeed = parseInt(barNeed)
			//console.log("barActive: " + barNeed);
			var barWidth = barNow/(barNow+barNeed)*100;
			//console.log("Bar width now : " + barWidth + "%")
			$(this).find(" .t-gigiena-another-projects-bar .t-gigiena-bar__active").width(barWidth + "%");
		})	
	}
	gigienaItemBar();

	$(".t-main-tabs_gigiena .t-main-tabs-tab").click(function(){
		$(".t-main-tabs_gigiena .t-main-tabs-tab").removeClass("t-active-tab");
		$(this).addClass("t-active-tab");
		var gigienaPartyId = $(this).attr("data-gigiena-party");
		$(".t-uchastie-program-party").removeClass("visible");
		$(".t-uchastie-program-party." + gigienaPartyId).addClass("visible");
	})



	$(".t-eco-tab-item").hover(function(){
		$(this).find(" .t-eco-tab__wrapper_front-side").toggleClass("t-eco-tab__wrapper_front-side_active");
		$(this).find(" .t-eco-tab__wrapper_back-side").toggleClass("t-eco-tab__wrapper_back-side_active")
	});



	$(window).on("scroll", function() {
		var scroll_from_top = $(document).scrollTop();
		$(".a-head-2").toggleClass("fixed", (scroll_from_top > 90));
	});


	$(".a-head-2-cnt .toggle-mnu").click(function(event){
		event.preventDefault();
		$(this).toggleClass("on");
		$(".a-head-2-mnu").slideToggle();
	})


	$(".t-uchastie-subotnik-2__watch-full").click(function(){
		$(".t-uchastie-subotnik-2__container").addClass("t-uchastie-subotnik-2__container_height");
		$(this).fadeOut(0);
	})


	$(".t-geo-map-btn").click(function(){
		$(this).toggleClass("active-geo-btn");
		$(".t-geo-map-right").toggleClass("active-geo-right");
		$(".t-geo-map-left").toggleClass("active-geo-left");
	})


	$(".t-sup-left-wrap-input input").click(function(){
		$(".t-sup-left-wrap").removeClass("__active-input");
		$(this).closest(".t-sup-left-wrap").addClass("__active-input")
	})


	$(".a-head-2-reg-sign-chevron").click(function(){
		$(".dropdown-country").slideToggle();
	})



	$(".t-eco-cour-form-burger").click(function(){
		$(".t-eco-cour-form-ul").slideToggle(0);
	})
	$('#va-accordion-1').vaccordion({
	});
	$('#va-accordion-2').vaccordion({
		visibleSlices: 2,
		accordionH: 300,
		expandedHeight	: 220
	});
	$('#va-accordion-3').vaccordion({
		visibleSlices: 2,
		accordionH: 300,
		expandedHeight	: 200
	});



	$(".block_checked i").click(function(){
		$(this).toggleClass("text-indent");
	})



	var default_th, default_txt = "";
	$(".th").remove();
	$(".default-table").find("th").each(function(index){
		default_th = parseInt($(this).width())+2;
		default_txt =  $(this).text();
		$(this)
		.closest(".default-table-wrap")
		.find(" .fixed-th")
		.append("<div class='th' style='width:"+default_th+"px'>"+ default_txt + "</div>");
	})




	function resizeTable(){
		$(".th").remove();
		$(".default-table").find("th").each(function(index){
			default_th = parseInt($(this).width())+2;
			default_txt =  $(this).text();
			// console.log("width - " + default_th);
			// console.log("text - " + default_txt);
			$(this)
			.closest(".default-table-wrap")
			.find(" .fixed-th")
			.append("<div class='th' style='width:"+default_th+"px'>"+ default_txt + "</div>");
		})
	}


	$(window).resize(function(){
		$(".th").remove();
		$(".default-table").find("th").each(function(index){
			default_th = parseInt($(this).width())+2;
			default_txt =  $(this).text();
			// console.log("width - " + default_th);
			// console.log("text - " + default_txt);
			$(this)
			.closest(".default-table-wrap")
			.find(" .fixed-th")
			.append("<div class='th' style='width:"+default_th+"px'>"+ default_txt + "</div>");
		})
	});

	$(".showlstprz").click(function(){
		$(this).fadeOut(0);
		$(".wrplist div").removeClass("hidepriz");		
	})
	$(".alltext a").click(function(){
		$(".txtmsnrs").addClass("txtmsnrs_click");
		$(".alltext").fadeOut(0);
	})

	//height for left mnu

	$(".structure-gallery-owl").owlCarousel({
		items: 9,
		autoWidth: true,
		nav: true
	});	
	$(".rating_owl").owlCarousel({
		items: 4,
		nav: true,
		dots: false,
		loop: true,
		margin: 8
	});
	$(".priz-carousel").owlCarousel({
		items: 1,
		nav: true
	});	

	var rotate_circle = 1;
	$(".t-main-tabs-tab__leads img").click(function(){
		var lead_active_a = $(".t-leads-a.t-leads-a__active").attr('class').split(/\s+/);
		lead_active_a = parseInt(lead_active_a[0].slice(5,lead_active_a[0].length));
		$(".t-leads-a").removeClass("t-leads-a__active");
		if(lead_active_a==$(".t-main-tabs-tab__leads-a a").length){
			lead_active_a = 0;
		}
		$(".t-leads-a.lead_"+(lead_active_a+1)).addClass("t-leads-a__active");
		
		$(this).css("transform","rotate("+rotate_circle*360+"deg)");
		rotate_circle++;
	})


	$(".t-tor-tables-tabs div").click(function(){
		$(".t-tor-tables-tabs div").removeClass("t-active-tab");
		$(this).addClass("t-active-tab")
	})




	$(".t-toroid-sm-ul.__first .t-toroid-sm-ul-li").click(function(){
		$(".t-toroid-sm-ul.__first .t-toroid-sm-ul-li").removeClass("t-toroid-sm-ul-li__active");
		$(this).addClass("t-toroid-sm-ul-li__active");
	})
	$(".t-toroid-sm-ul.__second .t-toroid-sm-ul-li").click(function(){
		$(".t-toroid-sm-ul.__second .t-toroid-sm-ul-li").removeClass("t-toroid-sm-ul-li__active");
		$(this).addClass("t-toroid-sm-ul-li__active");
	})






	$("main .toggle-mnu").click(function(event) {
		event.preventDefault();
		$(this).toggleClass("on");
		$(".t-header-block").toggleClass("active__left");
		$(".t-left-menu").toggleClass("active__left");
		$("body").toggleClass("t-body__active");
		return false;
	});



	var t_1 = 0, t_2 = 0, time = 0;
	var timerId = setInterval(function(){
		if(t_1 == 13){
			t_1 = 1;        
		}	
		if(t_2 == 13){
			t_2 = 1;        
		}	

		function startIt(){				
			$(".t-b-li-"+t_1).addClass("animation");
			$(".t-m-li-"+t_1).addClass("animation");
			t_1++;
		};

		function stopIt(){				
			$(".t-b-li-"+t_2).removeClass("animation");
			$(".t-m-li-"+t_2).removeClass("animation");	
			t_2++;
		};

		setTimeout(startIt, time);
		time = time + 200;
		setTimeout(stopIt, time);
	}, 200);




	var wtf;
	var check = false;
	var deg = 0;
	var t_b_l;
	var t_m_l;
	var this_class = 2;
	$(".t-b").click(function(){
		$(".t-toroid-first .t-toroid-circle__wrap__inside-ul").fadeIn(0);
		if (!$(this).hasClass("t-b__active-color")) {			
			var class_rotate = $(this).parent(".t-b-l__ ").attr('class').split(/\s+/);
			console.log("this shit is - " + class_rotate)
			this_class = class_rotate[1].slice(7,class_rotate[1].length);
			console.log("this shit is - " + this_class);

			var rotate = 30;
			deg = rotate*this_class-30;
			t_b_l = parseInt(this_class)+1;
			if(t_b_l > 12){
				t_b_l = 1;
			}
			$(".t-b").removeClass("t-b__active");
			$(".t-b").removeClass("t-b__active-color");
			$(this).addClass("t-b__active-color");

			$(".t-toroid-circle__wrap__inside-ul").css("transform","rotate("+deg+"deg)");

			for(var i = 0; i < 12; i++){	
				$(".t-m").removeClass("t-m__rotate_"+i*30);
			}
			$(".t-m").addClass("t-m__rotate_"+deg);

			$(".t-toroid-circle__wrap__inside-ul-li").css("opacity","0");


			this_class = parseInt(this_class);
			var for_tbl = this_class;
			console.log("this shit is - " + this_class);
			for(var i = 1; i <=12; i++){
				$(".t-b-"+i).removeClass("t-b-"+i);
			}
			console.log("this_class - " + this_class);
			for(var i = 1; i <= 12; i++){
				$(".t-b").removeClass("t-b-"+i+"__active");
				if (for_tbl>12) {
					for_tbl = 1;
				}
				$(".t-b-li-"+for_tbl+" div")
				.addClass("t-b-"+i)
				.css("transform","rotate(-"+(for_tbl*30)+"deg)");
				for_tbl++;
				if (for_tbl>12) {
					for_tbl = 1;
				}
			}

			function addDelay(){
				for(var i = 1;i <= 12; i++){
					$(".t-m-li-"+i).addClass("t-transition-delay-"+i);

				}
			}

			function oneOpacity(){
				$(".t-toroid-circle__wrap__inside-ul-li").css("opacity","1");
			}

			function removeDelay(){
				for(var i = 1;i <= 12; i++){
					$(".t-m-li-"+i).removeClass("t-transition-delay-"+i);
				}
			}

			setTimeout(addDelay, 10);
			setTimeout(oneOpacity, 20);
			setTimeout(removeDelay, 600);
		}
	})

	var split_class_m, this_class_m;
	$(".t-m").click(function(){
		if(!$(this).hasClass("t-m__active")){
			wtf = ($(this).css("transform"));
			$(".t-m").removeClass("t-m__active");
			$(this).addClass("t-m__active");
		}	

		split_class_m = $(this).parent("li").attr('class').split(/\s+/);
		console.log("this shit is - " + split_class_m)
		this_class_m = split_class_m[1].slice(7,split_class_m[1].length);
		console.log("this shit is - '" + this_class_m+"'");
		for(var i = 1; i <= 12; i++){
			$(".t-m").removeClass("t-m-li-div-"+i) 
		}
		t_m_l = parseInt(this_class_m);
		for(var i = 1; i <= 12; i++){
			$(".t-m").removeClass("t-m-"+i+"__active");
			if (t_m_l>12) {
				t_m_l = 1;
			}
			$(".t-m-li-"+t_m_l+" div")
			.addClass("t-m-li-div-"+i)
					// .css("transform","rotate(-"+(t_m_l*30)+"deg)");
					t_m_l++;
					if (t_m_l>12) {
						t_m_l = 1;
					}
				}	
			})






	$(".tab_to_click").click(function(){		
		$(".tab_to_click").removeClass("t-active-tab")
		var x = $(this).attr("data-tor-tab")
		$(this).addClass("t-active-tab");
		//console.log("x - " + x);
		$(".t-main-info").removeClass("visible");
		$(".t-main-info." + x).addClass("visible");

		var w = $(".t-main-info."+x+ " .t-main-info-description p").height();
		//console.log("i find only u - " + x);
		var k = $(this).parent(".t-main-info-description").length;
		
		$(".t-main-info-description-watch-all").fadeIn(0);


		//table th

		$(".th").remove();
		$("."+x+" .default-table").find("th").each(function(index){
			default_th = parseInt($(this).width())+2;
			default_txt =  $(this).text();
			$(this)
			.closest(".default-table-wrap")
			.find(" .fixed-th")
			.append("<div class='th' style='width:"+default_th+"px'>"+ default_txt + "</div>");
		})
		//table th



		$(".t-main-info-description").css("height","210px");	

		if($("." + x + " .t-main-info-description p").height() < 210){
			$("." + x + " .t-main-info-description .t-main-info-description-watch-all").fadeOut(0);
		}

		//hhconsole.log("x - " + x);
		if ($(window).width() < 850) {
			if($("." + x + " .t-main-info-description p").height() < 210){
				$(".t-main-info-description").css("height","auto")
			}
		}
		$(".t-third_child").html($(this).text());
	})
	

	if ($(window).width() < 850) {
		if($(".t-top .t-main-info-description p").height() < 210){
			$(".t-main-info-description").css("height","auto")
		}
	}

	$(".t-main-info-description-watch-all").click(function(){
		var z = $(this).parent(".t-main-info-description").find(" p").innerHeight();
		console.log(z);
		if ($(window).width() > 500) {
			var sm_height = setTimeout(function(){
				var z = $(this).parent(".t-main-info-description").find(" p").innerHeight();
			}, 300)
		}
		if ($(window).width() > 850) {
			$(".t-main-info-description").css("height",z);
		}  else {
			$(".t-main-info-description").css("height",(z+220));
		}
		
		$(this).fadeOut(0);
		var height_p = $(".t-main-info-description").height();
		// setTimeout(function(){
		// 	$(".t-left-menu").height($("main").height())
		// }, 800)
		console.log(z);
	})

	var i = 0;

//// don't touch it!!! final parenthesis
});

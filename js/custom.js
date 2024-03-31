 $(function () {
 	var slider = $("#slider");
 	var sliderWrap = $("#slider ul");
 	var sliderImg = $("#slider ul li");
 	var prevBtm = $("#sliderPrev");
 	var nextBtm = $("#sliderNext");
 	var length = sliderImg.length;
 	var width = sliderImg.width();
 	sliderWrap.width(width * length);
 	$("#slider ul li:last-child").prependTo("#slider ul");
 	sliderWrap.css("margin-left", -width);
 	nextBtm.on("click", function () {
 		sliderWrap.animate({
 			"margin-left": "-=" + width
 		}, 500, function () {
 			$("#slider ul li:first-child").appendTo("#slider ul");
 			sliderWrap.css("margin-left", -width)
 		});
 		return !1
 	});
 	prevBtm.on("click", function () {
 		sliderWrap.animate({
 			"margin-left": "+=" + width
 		}, 500, function () {
 			$("#slider ul li:last-child").prependTo("#slider ul");
 			sliderWrap.css("margin-left", -width)
 		});
 		return !1
 	})
 });
 $('.industry_slider').owlCarousel({
 	loop: !0,
 	center: !0,
 	autoplay: !0,
 	slideSpeed: 400,
 	margin: 30,
 	nav: !0,
 	navText: ["<img src='images/arrow_left_w.png'>", "<img src='images/button_arrow_w.png'>"],
 	dots: !1,
 	responsive: {
 		0: {
 			items: 2,
 			margin: 10
 		},
 		575: {
 			items: 3
 		},
 		768: {
 			items: 3,
 			margin: 20
 		},
 		992: {
 			items: 4
 		},
 		1200: {
 			items: 6
 		}
 	}
 });
 $(".banner_bootom_slider").owlCarousel({
 	margin: 20,
 	dots: !1,
 	nav: false,
 	slideSpeed: 400,
 	responsive: {
 		0: {
 			items: 2,
 			margin: 10,
 			autoplay: true,
 			loop: !0,
 			dots: true
 		},
 		400: {
 			items: 3,
 			margin: 10,
 			autoplay: true,
 			loop: !0,
 			dots: true
 		},
 		575: {
 			items: 4,
 			nav: false,
 			autoplay: true,
 			loop: !0,
 			margin: 20,
 			dots: true
 		},
 		992: {
 			items: 5,
 			margin: 30,
 			nav: false,
 			autoplay: true,
 			loop: !0,
 			dots: true
 		},
 		1199: {
 			items: 6,
 			nav: false,
 			dots: false,
 		}
 	}
 }), $('.blog_slider').owlCarousel({
 	margin: 30,
 	dots: !1,
 	slideSpeed: 400,
 	responsive: {
 		0: {
 			items: 1,
 			margin: 10,
 			nav: false,
 			autoplay: true,
 			loop: true,
 			dots: false,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 		},
 		575: {
 			items: 2,
 			nav: false,
 			autoplay: true,
 			loop: true,
 			dots: false,
 			margin: 20,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 		},
 		768: {
 			items: 3,
 			margin: 20,
 			nav: false,
 			autoplay: true,
 			loop: true,
 			dots: false,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 		},
 		992: {
 			items: 3,
 			nav: !0,
 			loop: false,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		}
 	}
 });
 $('.client_slider').owlCarousel({
 	margin: 20,
 	dots: !1,
 	slideSpeed: 400,
 	responsive: {
 		0: {
 			items: 2,
 			margin: 10,
 			autoplay: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		575: {
 			items: 3,
 			nav: !0,
 			loop: !0,
 			margin: 20,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		768: {
 			items: 4,
 			margin: 20,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		992: {
 			items: 6,
 			margin: 20,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		1200: {
 			items: 7,
 			nav: !1,
 		}
 	}
 });
 $('.solution_slider').owlCarousel({
 	loop: !0,
 	autoplay: !0,
 	items: 1,
 	slideSpeed: 400,
 	margin: 20,
 	nav: !0,
 	navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 	dots: !1,
 });
 $('.best_work_slider').owlCarousel({
 	loop: !0,
 	autoplay: !0,
 	items: 1,
 	slideSpeed: 400,
 	margin: 20,
 	nav: !0,
 	navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 	dots: !1,
 });

 //COMMENTED JS
 $('.value_benifit_slider').owlCarousel({
 	loop: !0,
 	autoplay: !0,
 	items: 1,
 	slideSpeed: 400,
 	margin: 20,
 	nav: !0,
 	navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 	dots: !1,
 });
 $('.testimonial_slider').owlCarousel({
 	loop: !0,
 	autoplay: !0,
 	slideSpeed: 400,
 	items: 1,
 	margin: 20,
 	nav: !0,
 	navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 	dots: !1,
 });
 $('.prime_logo_slider').owlCarousel({
 	margin: 50,
 	dots: !1,
 	slideSpeed: 400,
 	responsive: {
 		0: {
 			items: 2,
 			margin: 10,
 			autoplay: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		575: {
 			items: 3,
 			nav: !0,
 			loop: !0,
 			margin: 10,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		768: {
 			items: 4,
 			margin: 10,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		992: {
 			items: 6,
 			margin: 20,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		1200: {
 			items: 7,
 			nav: !1,
 		}
 	}
 });
 $('.certificate_slider').owlCarousel({
 	margin: 50,
 	dots: !1,
 	slideSpeed: 400,
 	responsive: {
 		0: {
 			items: 2,
 			margin: 10,
 			autoplay: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		575: {
 			items: 3,
 			nav: !0,
 			loop: !0,
 			margin: 10,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		768: {
 			items: 4,
 			margin: 10,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		992: {
 			items: 6,
 			margin: 20,
 			nav: !0,
 			loop: !0,
 			navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 			dots: !1,
 		},
 		1200: {
 			items: 7,
 			nav: !1,
 		}
 	}
 });
 $(window).scroll(function () {
 	var scroll = $(window).scrollTop();
 	if (scroll >= 50) {
 		$("header").addClass("fixed_header")
 	} else {
 		$("header").removeClass("fixed_header")
 	}
 });
 $('.app_slider').owlCarousel({
 	loop: !0,
 	autoplay: !1,
 	slideSpeed: 400,
 	margin: 20,
 	paginationSpeed: 400,
 	items: 1,
 	nav: !0,
 	navText: ["<img src='images/slider_arrow_left.png'>", "<img src='images/slider_arrow_right.png'>"],
 	dots: !1,
 });
 $('.mpbileAD_cat_tab').owlCarousel({
 	loop: !1,
 	autoplay: !1,
 	items: 4,
 	margin: 20,
 	nav: !0,
 	navText: ["<img src='images/arrow_left_w.png'>", "<img src='images/button_arrow_w.png'>"],
 	dots: !1,
 	responsive: {
 		0: {
 			items: 1,
 			margin: 10,
 		},
 		575: {
 			items: 2,
 			margin: 20,
 		},
 		768: {
 			items: 3,
 		},
 		1366: {
 			items: 4,
 		}
 	}
 });
 $(document).ready(function () {
 	var li = $(".w3codemasters_time_slote .owl-item li a");
 	$(".w3codemasters_time_slote .owl-item li a").click(function () {
 		li.removeClass('active')
 	})
 })
 /*=============================================== 
       18. 3D Slider
   ================================================*/

 if ($('#carousel').length > 0) {
 	var transformProp = Modernizr.prefixed('transform');

 	function Carousel3D(el) {
 		this.element = el;

 		this.rotation = 0;
 		this.panelCount = 0;
 		this.totalPanelCount = this.element.children.length;
 		this.theta = 0;

 		this.isHorizontal = true;

 	}

 	Carousel3D.prototype.modify = function () {

 		var panel, angle, i;

 		this.panelSize = this.element[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];
 		this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
 		this.theta = 360 / this.panelCount;

 		// do some trig to figure out how big the carousel
 		// is in 3D space
 		this.radius = Math.round((this.panelSize / 2) / Math.tan(Math.PI / this.panelCount));

 		for (i = 0; i < this.panelCount; i++) {
 			panel = this.element.children[i];
 			angle = this.theta * i;
 			panel.style.opacity = 1;
 			//panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';
 			// rotate panel, then push it out in 3D space
 			panel.style[transformProp] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
 		}

 		// hide other panels
 		for (; i < this.totalPanelCount; i++) {
 			panel = this.element.children[i];
 			panel.style.opacity = 0;
 			panel.style[transformProp] = 'none';
 		}

 		// adjust rotation so panels are always flat
 		this.rotation = Math.round(this.rotation / this.theta) * this.theta;

 		this.transform();

 	};

 	Carousel3D.prototype.transform = function () {
 		// push the carousel back in 3D space,
 		// and rotate it
 		this.element.style[transformProp] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
 	};



 	var init = function () {


 		var carousel = new Carousel3D(document.getElementById('carousel')),
 			navButtons = document.querySelectorAll('#navigation button'),

 			onNavButtonClick = function (event) {
 				var increment = parseInt(event.target.getAttribute('data-increment'));
 				carousel.rotation += carousel.theta * increment * -1;
 				carousel.transform();
 			};

 		// populate on startup
 		carousel.panelCount = 12;
 		carousel.modify();

 		for (var i = 0; i < 2; i++) {
 			navButtons[i].addEventListener('click', onNavButtonClick, false);
 		}

 		setTimeout(function () {
 			document.body.addClassName('ready');
 		}, 0);

 	};

 	window.addEventListener('DOMContentLoaded', init, false);
 }


 jQuery(document).ready(function () {
 	jQuery('#latest-blogs-posts').html("Please wait while loading...");
 	jQuery.ajax({
 		type: 'GET',
 		url: 'https://www.orizensoft.com/blog/wp-json/wp/v2/posts?per_page=3&order=desc&orderby=date',
 		success: function (data) {
 			var posts_html = '';
 			jQuery.each(data, function (index, post) {
 				console.log(post);
 				thumb = post.uagb_featured_image_src.large[0];
 				link = post.link;
 				postContent = post.excerpt.rendered;
 				let initialDate = post.date;

 				let formattedDate = new Date(initialDate).toLocaleDateString('en-US', {
 					day: '2-digit',
 					month: 'long',
 					year: 'numeric',
 					hour12: false

 				})
 				posts_html += '<div class="col-md-6 col-lg-4 mb-3 mb-lg-0">';
 				posts_html += '<div class="outer">';
 				posts_html += '<div class="blog_img">';
 				posts_html += '<a href="' + link + '" target="_blank" class="link">';
 				posts_html += '<img src="' + thumb + '">';
 				/*posts_html +='<picture>';
 					posts_html +='<img data-src="'+thumb+'" src="'+thumb+'" class="lazy error" alt="" data-was-processed="true">';
 				posts_html +='</picture>'*/
 				posts_html += '</a>';
 				posts_html += '</div>';
 				posts_html += '<div class="px-3 pb-4">';
 				posts_html += '<h5><a href="' + link + '" target="_blank" class="link">' + post.title.rendered + '</a></h5>';
 				posts_html += '<div class="date">' + formattedDate + '</div>';
 				/* posts_html += postContent; */
 				posts_html += '<a href="' + link + '" target="_blank" class="link">Read More <i class="arrow_orange"></i></a>';
 				posts_html += '</div>';

 				posts_html += '</div>';
 				posts_html += '</div>';
 			});

 			jQuery('#latest-blogs-posts').html(posts_html);
 		},
 		error: function (request, status, error) {
 			console.log(error);
 		}
 	});
 });

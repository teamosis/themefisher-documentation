---
title: Banner Slider
weight: 5
draft: false
---
Go to your index file and change the content of the Slider.

1. Customize the slider content and image . Here is the slider item html block.

```html
<div class="banner-carousel-item" style="background-image:url(images/slider-main/bg1.jpg)">
	<div class="slider-content">
		<div class="container h-100">
			<div class="row align-items-center h-100">
				<div class="col-md-12 text-center">
					<h2 class="slide-title" data-animation-in="slideInLeft">17 Years of excellence in</h2>
					<h3 class="slide-sub-title" data-animation-in="slideInRight">Construction Industry</h3>
					<p data-animation-in="slideInLeft" data-duration-in="1.2">
						<a href="services.html" class="slider btn btn-primary">Our Services</a>
						<a href="contact.html" class="slider btn btn-primary border">Contact Now</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
```

2\. Initialize slider from scripts.js

```js
// banner-carousel
function bannerCarouselOne() {
	$('.banner-carousel.banner-carousel-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		speed: 600,
		arrows: true,
		prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
	});
	$('.banner-carousel.banner-carousel-1').slickAnimation();
}
bannerCarouselOne();
```
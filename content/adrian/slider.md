---
title: Slider
weight: 5
draft: false
---
 Go to your index file and change the content of the Slider.

1. Customize the slider content and image . Here is the slider item html block.

```html
<div class="slider-item " style="background-image:url('images/slider/slideshow1-2.jpg')">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
				<div class="slider-caption">
					<span class="lead">Winter Collection Sale </span>
					<h1 class="mt-2 mb-5"><span class="text-color">70% off </span>to everything</h1>
					<a href="shop.html" class="btn btn-main">Shop Now</a>
				</div>
			</div>
		</div>
	</div>
</div>
```

2\. Initialize slider from scripts.js

```js
$('.main-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	dots: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 6000,
	prevArrow:'<div class="slick-control-prev"><i class="tf-ion-android-arrow-back"></i></div>',
	nextArrow: '<div class="slick-control-next"><i class="tf-ion-android-arrow-forward"></i></div>'
});
```
---
title: 'Testimonial Slider'
weight: 6
draft: false
---
We have used slick slider in testimonial section. The basic structure of slick slider is given below

1\. HTML markup setup

```html
<div class="testimonial-item position-relative">
  <i class="ti-quote-left text-color text-lg"></i>
	<p class="mt-4">Neque ipsa consequuntur excepturi quas repudiandae aliquam iste ab laboriosam id facere ducimus odio sed officia provident doloribus explicabo, magni, corrupti sit.</p>
	<div class="testimonial-author">
		<h5 class="mb-0 text-capitalize">Thomas Johnson</h5>
		<p>Excutive Director</p>
	</div>
</div>
```

\*Change contents form `testimonial-item`.

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div).

 2. jQuery initialization

```js
$('.testimonial-wrap').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 6000,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
```
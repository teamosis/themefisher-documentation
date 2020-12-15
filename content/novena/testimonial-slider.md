---
title: 'Testimonial Slider'
weight: 10
draft: false
---
We have used Slick carousel slider in testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup

```html
<div class="testimonial-block">
	<div class="client-info ">
		<h4>Amazing service!</h4>
		<span>John Partho</span>
	</div>
		<p>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
		</p>
	<i class="icofont-quote-right"></i>
</div>
```

\*Change contents form `testimonial-block`.

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

 2. jQuery initialization

```js
$('.testimonial-wrap').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	vertical:true,
	verticalSwiping:true,
	autoplaySpeed: 6000,
	responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:1,
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
			},{
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
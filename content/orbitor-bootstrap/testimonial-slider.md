---
title: 'Testimonial Slider'
weight: 6
draft: false
---
We have used owl carousel slider in testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup

```html
<div class="testimonial-block">
	<p>
	Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
	</p>

      <div class="client-info d-flex align-items-center">
		<div class="client-img">
		<img src="images/team/testimonial1.jpg" alt="" class="img-fluid">
		</div>
		<div class="info">
			<h6>John Partho</h6>
			<span>Newyork USA</span>
		</div>
	</div>
</div>
```
\*Change contents form `testimonial-block`.

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization

```js
$('.testimonial-wrap').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	infinite: true,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 6000,
	responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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
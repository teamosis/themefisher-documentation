---
title: 'How to Change Testimonial Slider Content'
weight: 7
draft: false
---
We have used Slick slider in testimonial section. The basic structure of Slick Sloder is given below

1\. HTML markup setup

```html
<div class="testimonial-carousel p-4">
	<div> <i class="ion-quote text-color mb-3 d-block"></i>
		<p class="mb-4">"This Company created an e-commerce site with the tools to make our business a success, with
			innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
		<div class="user d-flex"> <img src="images/avater.jpg" alt=""
				class="img-fluid  rounded-circle mr-3">
			<p class="pb-0 mt-2">Rose Ray <span class="d-block">CEO-Themefisher</span></p>
		</div>
	</div>
	<div> <i class="ion-quote text-color mb-3 d-block"></i>
		<p class="mb-4">"This Company created an e-commerce site with the tools to make our business a success, with
			innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
		<div class="user d-flex"> <img src="images/avater.jpg" alt=""
				class="img-fluid  rounded-circle mr-3">
			<p class="pb-0 mt-2">Rose Ray <span class="d-block">CEO-Themefisher</span></p>
		</div>
	</div>
	<div> <i class="ion-quote text-color mb-3 d-block"></i>
		<p class="mb-4">"This Company created an e-commerce site with the tools to make our business a success, with
			innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
		<div class="user d-flex"> <img src="images/avater.jpg" alt=""
				class="img-fluid  rounded-circle mr-3">
			<p class="pb-0 mt-2">Rose Ray <span class="d-block">CEO-Themefisher</span></p>
		</div>
	</div>
	<div> <i class="ion-quote text-color mb-3 d-block"></i>
		<p class="mb-4">"This Company created an e-commerce site with the tools to make our business a success, with
			innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
		<div class="user d-flex"> <img src="images/avater.jpg" alt=""
				class="img-fluid rounded-circle mr-3">
			<p class="pb-0 mt-2">Rose Ray <span class="d-block">CEO-Themefisher</span></p>
		</div>
	</div>
</div>
```

\*Change contents form `div`.

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `script.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization

```js
$('.testimonial-carousel').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000
});
```

under the curly brace apply your slider settings. For more about Slick carousel follow this [Link](http://kenwheeler.github.io/slick/).
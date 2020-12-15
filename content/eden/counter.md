---
title: Counter
weight: 8
draft: false
---
We have used counter in this template using jQuery plugin named [counterup](http://bfintal.github.io/Counter-Up/demo/demo.html)

1\. Basic Block we have designed

```html
<div class="cta-box mb-5 mb-lg-0">
	<i class="flaticon-waiter text-white"></i>
	<h2 class="mt-2 text-white count">150</h2>
	<p class="mb-0 text-white text-uppercase">Staffs</p>
</div>
```

Change the value of `h4` as you want.

2\. jQuery code for counter up

```js
$('.count').counterUp({
	delay: 10,
	time: 1000
});
```

you can customize the settings of counterUp (make sure you have read the documentation from [here](http://bfintal.github.io/Counter-Up/demo/demo.html))
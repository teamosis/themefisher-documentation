---
title: 'How to change Counter'
weight: 7
draft: false
---
TO change Counter in html.

```html
<div class="counter-stat">
	<i class="icofont-flag"></i>
	<span class="h3">700</span>+
	<p>Surgery Comepleted</p>
</div>
```

2\. scripts customization

```js
$('.counter-stat span').counterUp({
	delay: 10,
	time: 1000
});
```
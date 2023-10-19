---
title: Counter
weight: 9
draft: false
---

We have used counter in this template using jQuery plugin named [counterup](http://bfintal.github.io/Counter-Up/demo/demo.html)

1\. Basic Block we have designed  
```html
<div class="counter-item">
 <i class="fa fa-cloud-upload"></i>
 <div class="timer" id="item1" data-to="991" data-speed="5000"></div>
 <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium aperiam.</p>
 <h3>Files uploaded</h3>
 </div>
```  
Change the value of `data-to` value as you want count from 0 to that value.

2\. jQuery code for counter up  
```js
$('.counter-item').appear(function() {  
 $('.timer').countTo();  
},{accY: -100});  
```  
you can customize the settings of counterUp (make sure you have read the documentation from [here](http://bfintal.github.io/Counter-Up/demo/demo.html)
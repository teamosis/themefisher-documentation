---
title: Counter
weight: 8
draft: false
---
We have used counter in this template using jQuery plugin named [counterup](http://bfintal.github.io/Counter-Up/demo/demo.html)

1\. Basic Block we have designed  
```html 
<div class="block">  
 <i class="ion-ios-chatboxes-outline"></i>  
 <h4 class="counter">20000</h4>  
 <span>Cups Of Coffee</span>  
</div>
```
Change the value of `h4` as you want.

2\. jQuery code for counter up  
```js
$('.counter').counterUp({  
 delay: 10,
 time: 1000
});  
```
you can customize the settings of counterUp (make sure you have read the documentation from [here](http://bfintal.github.io/Counter-Up/demo/demo.html))
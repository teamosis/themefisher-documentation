---
title: Counter
weight: 8
draft: false
---

We have used counter in this template using jQuery plugin named [counterup](http://bfintal.github.io/Counter-Up/demo/demo.html)

1\. Basic Block we have designed  
```html
<!– first count item –>
<div class="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms">
 <div class="counters-item">
 <i class="fa fa-clock-o fa-3x"></i>
 <strong data-to="3200">0</strong>
 <!– Set Your Number here. i,e. data-to="56" –>
 <p>Hours of Work</p>
 </div>
</div>
```  
Change the value of `span` as you want.

2\. jQuery code for counter up  
```js
$(".number-counters").appear(function () {  
 $(".number-counters \[data-to\]").each(function () {  
 var e = $(this).attr("data-to");  
 $(this).delay(6e3).countTo({  
 from: 50,  
 to: e,  
 speed: 3e3,  
 refreshInterval: 50  
 })  
 })  
});  
```  
you can customize the settings of counterUp (make sure you have read the documentation from [here](http://bfintal.github.io/Counter-Up/demo/demo.html)
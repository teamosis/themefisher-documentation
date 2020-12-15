---
title: Counter
weight: 10
draft: false
---

We have used counter in this template using jQuery plugin named [counterup](http://bfintal.github.io/Counter-Up/demo/demo.html)

1\. Basic Block we have designed  
```html
<div class="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown" data-wow-duration="500ms">
 <div class="counters-item">
 <div>
 <span data-speed="3000" data-to="320">320</span>
 </div>
 <i class="fa fa-users fa-3x"></i>
 <h3>Happy Clients</h3>
 </div>
</div>
```  
Change the value of `span` as you want.

2\. jQuery code for counter up  
```js
(function() {  
 var count = {  
 initialized : false,  
 initialize : function() {  
 if (this.initialized)  
 return;  
 this.initialized = true;  
 this.build();  
 },  
 build : function() {  
 this.animations();  
 },  
 animations : function() {  
 // Count To  
 $(".counters-item \[data-to\]").each(function() {  
 var $this = $(this);  
 $this.appear(function() {  
 $this.countTo({});  
 }, {  
 accX : 0,  
 accY : -150  
 });  
 });  
 },  
 };  
 count.initialize();  
})();  
```  
you can customize the settings of counterUp (make sure you have read the documentation from [here](http://bfintal.github.io/Counter-Up/demo/demo.html)
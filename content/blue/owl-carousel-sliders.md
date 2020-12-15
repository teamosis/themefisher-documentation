---
title: 'Owl Carousel Sliders'
weight: 8
draft: false
---
We have used owl carousel slider in recent work and testimonial section. The basic structure of owl carousel is given below

```html
<div id="works">
 <div class="work-item">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> <br> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
 </div>
 <div class="work-item">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
 </div>
 <div class="work-item">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

```JS  
$("#works").owlCarousel({  
 navigation : true,  
 pagination : false,  
 slideSpeed : 700,  
 paginationSpeed : 400,  
 singleItem:true,  
 navigationText: \["<i class=’fa fa-angle-left fa-lg’></i>","<i class=’fa fa-angle-right fa-lg’></i>"\]  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](http://www.landmarkmlp.com/js-plugin/owl.carousel/).
---
title: 'Owl Carousel Sliders'
weight: 7
draft: false
---

We have used owl carousel slider in works and testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="testimonial" class="">
 <div class="testimonial-item text-center">
 <img src="img/member-1.jpg" alt="Our Clients">
 <div class="clearfix">
 <span>Katty Flower</span>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
 </div>
 </div>
 <div class="testimonial-item text-center">
 <img src="img/member-1.jpg" alt="Our Clients">
 <div class="clearfix">
 <span>Katty Flower</span>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
 </div>
 </div>
 <div class="testimonial-item text-center">
 <img src="img/member-1.jpg" alt="Our Clients">
 <div class="clearfix">
 <span>Katty Flower</span>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
 </div>
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
$("#works, #testimonial").owlCarousel({  
 navigation : true,  
 pagination : false,  
 slideSpeed : 700,  
 paginationSpeed : 400,  
 singleItem:true,  
 navigationText: \["<i class=’fa fa-angle-left fa-lg’></i>","<i class=’fa fa-angle-right fa-lg’></i>"\]  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
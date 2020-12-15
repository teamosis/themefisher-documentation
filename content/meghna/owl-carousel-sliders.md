---
title: 'Owl Carousel Sliders'
weight: 7
draft: false
---

We have used owl carousel slider in recent blog and testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="testimonials">

 <!– testimonial single –>
 <div class="item text-center">

 <!– client photo –>
 <div class="client-thumb">
 <img src="img/team/client.jpg" class="img-responsive" alt="Meghna">
 </div>
 <!– /client photo –>

 <!– client info –>
 <div class="client-info">
 <div class="client-meta">
 <h3>Abul Mal Muhit</h3>
 <span>Dec 26, 2014</span>
 </div>
 <div class="client-comment">
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ex, cupiditate, error, suscipit saepe sed ea consequuntur inventore sequi sit illo.</p>
 <ul class="social-profile">
 <li><a href="#"><i class="fa fa-facebook-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-twitter-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-linkedin-square fa-lg"></i></a></li>
 </ul>
 </div>
 </div>
 <!– /client info –>
 </div>
 <!– /testimonial single –>

 <!– testimonial single –>
 <div class="item text-center">

 <!– client photo –>
 <div class="client-thumb">
 <img src="img/team/client.jpg" class="img-responsive" alt="Meghna">
 </div>
 <!– /client photo –>

 <!– client info –>
 <div class="client-info">
 <div class="client-meta">
 <h3>Abul Mal Muhit</h3>
 <span>Dec 26, 2014</span>
 </div>
 <div class="client-comment">
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ex, cupiditate, error, suscipit saepe sed ea consequuntur inventore sequi sit illo.</p>
 <ul class="social-profile">
 <li><a href="#"><i class="fa fa-facebook-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-twitter-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-linkedin-square fa-lg"></i></a></li>
 </ul>
 </div>
 </div>
 <!– /client info –>
 </div>
 <!– /testimonial single –>

 <!– testimonial single –>
 <div class="item text-center">

 <!– client photo –>
 <div class="client-thumb">
 <img src="img/team/client.jpg" class="img-responsive" alt="Meghna">
 </div>
 <!– /client photo –>

 <!– client info –>
 <div class="client-info">
 <div class="client-meta">
 <h3>Abul Mal Muhit</h3>
 <span>Dec 26, 2014</span>
 </div>
 <div class="client-comment">
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ex, cupiditate, error, suscipit saepe sed ea consequuntur inventore sequi sit illo.</p>
 <ul class="social-profile">
 <li><a href="#"><i class="fa fa-facebook-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-twitter-square fa-lg"></i></a></li>
 <li><a href="#"><i class="fa fa-linkedin-square fa-lg"></i></a></li>
 </ul>
 </div>
 </div>
 <!– /client info –>
 </div>
 <!– /testimonial single –>

</div> <!– end testimonial wrapper –>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
//Init the carousel  
$("#testimonials").owlCarousel({  
 slideSpeed: 500,  
 paginationSpeed: 500,  
 singleItem: true,  
 pagination : true,  
 transitionStyle : "backSlide"  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](http://www.landmarkmlp.com/js-plugin/owl.carousel/).
---
title: 'Owl Carousel Slider'
weight: 9
draft: false
---
We have used owl carousel slider in clients opinion section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="th-slider" class="th-sldier">
 <div class="item">
 <!– "We are add Owl Carousel Slider And Added  
 Some Custome Class to Use Our Style" Easy to suse –>
 <!– Slider item –>
 <!– <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 padding-0"> –>
 <div class="clients-area">
 <!– <div class="round-shape"></div> –>
 <div class="clients-description">
 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
 <img src="img/clients-img1.png" alt="Clients">
 <div class=" th-media-body">
 <h3 class="th-media-heading">Paul Lapkin</h3>
 <h4 class="th-media-subheading">CEO at DeviserWeb</h4>
 </div>
 </div>
 </div>
 <!– </div> –>
 <!– End Slider item –>
 </div>
 <div class="item">
 <!– Slider item –>
 <!– <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 padding-0"> –>
 <div class="clients-area">
 <!– <div class="round-shape"></div> –>
 <div class="clients-description">
 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
 <img src="img/clients-img1.png" alt="Clients">
 <div class=" th-media-body">
 <h3 class="th-media-heading">Paul Lapkin</h3>
 <h4 class="th-media-subheading">CEO at DeviserWeb</h4>
 </div>
 </div>
 </div>
 <!– </div> –>
 <!– End Slider item –>
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `script.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
// Owl Carousel Activation  
var owl = $(‘.th-sldier’);  
owl.owlCarousel({  
 navigation : true,  
 singleItem : true,  
 transitionStyle : ‘fade’,  
 autoPlay:true,  
 pagination:true  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
---
title: 'Owl Carousel Slider'
weight: 8
draft: false
---

We have used owl carousel slider in client section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="clients-logo" class="owl-carousel">
 <div>
 <img src="images/clients/logo-1.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-2.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-3.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-4.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-5.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-1.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-2.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-3.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-4.jpg" alt="">
 </div>
 <div>
 <img src="images/clients/logo-5.jpg" alt="">
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
$("#clients-logo").owlCarousel({

 itemsCustom : false,  
 pagination : false,  
 items : 5,  
 autoplay: true,

})  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
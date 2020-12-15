---
title: 'Owl carousel slider'
weight: 10
draft: false
---
We have used owl carousel slider in client and testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="clients-slider" class="clients-logo-slider">
 <img src="img/client-logo/logo1.png" alt="">
 <img src="img/client-logo/logo-2.png" alt="">
 <img src="img/client-logo/logo-3.png" alt="">
 <img src="img/client-logo/logo-4.png" alt="">
 <img src="img/client-logo/logo-5.png" alt="">
 <img src="img/client-logo/logo1.png" alt="">
 <img src="img/client-logo/logo-2.png" alt="">
 <img src="img/client-logo/logo-3.png" alt="">
 <img src="img/client-logo/logo-4.png" alt="">
 <img src="img/client-logo/logo-5.png" alt="">
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
$("#clients-slider").owlCarousel({  
 slideSpeed: 500,  
 paginationSpeed: 500,  
 pagination : false,  
 autoPlay: true,  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
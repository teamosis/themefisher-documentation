---
title: 'Owl Carousel Slider'
weight: 7
draft: false
---
We have used owl carousel slider in team, pricing, testimonial, clients, news section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div id="example" class="owl-carousel">
 <div class="item">
 …  
 </div>
 <div class="item">
 …  
 </div>
 <div class="item">
 …  
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
$("#example").owlCarousel({  
 your carousel settings……  
})  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
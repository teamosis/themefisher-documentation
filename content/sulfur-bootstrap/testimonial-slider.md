---
title: 'Testimonial Slider'
weight: 9
draft: false
---

We have used owl carousel slider in testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup  
```html
<div class="testimonial-wrapper">
 <div class="testimonial-item">
 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
 <img src="asset/images/team/team-1.jpg" alt="Testimonial images">
 <h5>John Doe</h5>
 <div class="desgnation">CEO, ThemeBean</div>
 </div>
 <div class="testimonial-item">
 ….  
 </div>
 <div class="testimonial-item">
 ….  
 </div>
 <div class="testimonial-item">
 ….  
 </div>
</div>
```

\*Change contents form `testimonial-item`.

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

2\. jQuery initialization  
```JS  
var testimonial = $(".testimonial-wrapper");  
testimonial.owlCarousel({  
 pagination: false,  
 navigation : true,  
 slideSpeed : 1000,  
 stopOnHover: true,  
 autoPlay: 3000,  
 singleItem: true,  
 transitionStyle : "fade",  
 navigationText: \[‘<i class="fa fa-chevron-left"></i>’, ‘<i class="fa fa-chevron-right"></i>’\]  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
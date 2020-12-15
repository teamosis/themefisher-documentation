---
title: 'Owl Carousel Sliders'
weight: 6
draft: false
---
We have used owl carousel 2 slider in testimonial section. The basic structure of owl carousel is given below

```html
<div id="testimonial-slider" class="owl-carousel">
 <div>
 <img src="img/cotation.png" alt="IMG">
 <p>"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
 <div class="user">
 <img src="img/item-img1.jpg" alt="Pepole">
 <p><span>Rose Ray</span> CEO-Themefisher</p>
 </div>
 </div>
 <div>
 <img src="img/cotation.png" alt="IMG">
 <p>"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
 <div class="user">
 <img src="img/item-img1.jpg" alt="Pepole">
 <p><span>Rose Ray</span> CEO-Themefisher</p>
 </div>
 </div>
 <div>
 <img src="img/cotation.png" alt="IMG">
 <p>"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
 <div class="user">
 <img src="img/item-img1.jpg" alt="Pepole">
 <p><span>Rose Ray</span> CEO-Themefisher</p>
 </div>
 </div>
 <div>
 <img src="img/cotation.png" alt="IMG">
 <p>"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."</p>
 <div class="user">
 <img src="img/item-img1.jpg" alt="Pepole">
 <p><span>Rose Ray</span> CEO-Themefisher</p>
 </div>
 </div>
</div>
```

Add the `class` or `id` name of the `div` you want to apply the slider of owl carousel in `main.js` file like below (\*We have the `id` `works` of the div)

```JS  
$("#testimonial-slider").owlCarousel({  
 paginationSpeed : 500,  
 singleItem:true,  
 autoPlay: 3000,  
});  
```

under the curly brace apply your slider settings. For more about owl carousel follow this [link](https://owlcarousel2.github.io/OwlCarousel2/).
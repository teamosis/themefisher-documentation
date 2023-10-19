---
title: 'Image Popup'
weight: 10
draft: false
---
Magnific popup is nice tool that offers a nice way to add zooming functionality for images. The basic structure is given below

1\. HTML code  
```html
<div class="gallery-img">
 <a href="img/portfolio/single-portfolio-img2.jpg" class="image-link">
 <div class="gallery-overlay-icon">
 <i class="tf-ion-android-search"></i>
 </div>
 <img src="img/portfolio/single-portfolio-img2.jpg" alt="">
 </a>
</div>
```

2\. Js Code  
```js
$(‘.image-link’).magnificPopup({  
 type: ‘image’  
});  
```  
`image-link` for popup and `href` image path is to popup the image.

know more about magnific popup setting in this link – <http://dimsemenov.com/plugins/magnific-popup/>
---
title: 'Image popup'
weight: 7
draft: false
---
Fancybox 2.1.5 is nice tool that offers a nice way to add zooming functionality for images. The basic structure is given below

1\. HTML code  
```html
<a rel="gallery" class="fancybox" href="images/portfolio/item-2.jpg">Demo</a>
```

`class` `fancybox` for popup and `href` image path is to popup the image.

2\. Initialize the `fancybox` in jQuery

```js
// fancybox  
$(".fancybox").fancybox({  
 padding: 0,

 openEffect : ‘elastic’,  
 openSpeed : 450,

 closeEffect : ‘elastic’,  
 closeSpeed : 350,

 closeClick : true,  
 helpers : {  
 title : {  
 type: ‘inside’  
 },  
 overlay : {  
 css : {  
 ‘background’ : ‘rgba(0,0,0,0.8)’  
 }  
 }  
 }  
});  
```

know more about fancybox setting in this link – <http://fancyapps.com/fancybox/>
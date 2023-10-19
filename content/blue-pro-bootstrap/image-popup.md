---
title: 'Image Popup'
weight: 10
draft: false
---
Fancybox 2.1.5 is nice tool that offers a nice way to add zooming functionality for images. The basic structure is given below

1\. HTML code  
```html
<a class="fancybox" title="Wall street 6" data-fancybox-group="works" href="img/portfolio/item-6.jpg"><i class="ion-ios-search"></i></a>
```

`class` `fancybox` for popup and `href` image path is to popup the image.

2\. Initialize the `fancybox` in jQuery

```js
$(".fancybox").fancybox({  
 padding: 0,

 openEffect : ‘elastic’,  
 openSpeed : 650,

 closeEffect : ‘elastic’,  
 closeSpeed : 550,

 closeClick : true,

 beforeShow: function () {  
 this.title = $(this.element).attr(‘title’);  
 this.title = ‘<h3>’ + this.title + ‘</h3>’ + ‘<p>’ + $(this.element).parents(‘.portfolio-item’).find(‘img’).attr(‘alt’) + ‘</p>’;  
 },

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

});  
```

know more about fancybox setting in this link – <http://fancyapps.com/fancybox/>
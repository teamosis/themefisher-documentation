---
title: 'Image Popup'
weight: 11
draft: false
---

Fancybox 2.1.5 is nice tool that offers a nice way to add zooming functionality for images. The basic structure is given below

1\. HTML code  
```html
<a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-2.jpg"><i class="fa fa-eye fa-lg"></i></a>
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
});  
```

know more about fancybox setting in this link – <http://fancyapps.com/fancybox/>
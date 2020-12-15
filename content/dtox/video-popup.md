---
title: 'Video popup'
weight: 6
draft: false
---
Venobox is nice tool that offers a nice way to add zooming functionality for images/videos. The basic structure is given below

1\. HTML code

```html
<a data-vbtype="video" class="boxbox" href="video-link-here">Demo</a>  
```

`class` `boxbox` for popup and `href` video link is to popup the video.

2\. Initialize the `venobox` in jQuery

```js
// venobox
$(document).ready(function(){  
 $(‘.venobox’).venobox();  
});
```

know more about Venobox setting in this link – <http://veno.es/venobox/>
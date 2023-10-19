---
title: 'How to change promo video'
weight: 7
draft: false
---
We have added a random youtube video url on promo video section.To change promo video with your youtube give you youtube link in `data-video` like below example.

```html
<!– Promo Video –>
<div class="video">
 <img class="img-fluid shadow" src="images/thumbs/promo-video-thumbnail.png" alt="video-thumbnail">
 <div class="video-button video-box">
 <!– Video Play Button –>
 <a href="javascript:void(0)">
 <i class="tf-ion-play" data-video="your-youtube-url?autoplay=1"></i>
 </a>
 </div>
</div>
```

`autoplay=1` is used for play automatically when the video loads in iframe.

We use few lines of code in `custom.js` for play video. You can edit as you want from `custom.js`. For video, line of codes is given below

```js
// —————————–  
// Video Replace  
// —————————–  
$(‘.video-box i’).click(function() {  
 var video = ‘<iframe allowfullscreen src="’ + $(this).attr(‘data-video’) + ‘"></iframe>’;  
 $(this).replaceWith(video);  
});  
```
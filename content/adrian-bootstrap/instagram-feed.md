---
title: 'Instagram feed'
weight: 8
draft: false
---
You can add now your live instagram feed here.

1. Customize the html

```html
<div class="instagram-post mx-2"><img class="img-fluid w-100" src="images/feed/i2.jpg" alt="instagram-image">
  <ul class="list-inline text-center mb-0">
    <li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="tf-ion-ios-heart mr-2"></i>65</a></li>
    <li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="tf-ion-android-chat mr-2"></i>11</a></li>
  </ul>
</div>
```

2\. Add your Instagram ID to get the element.

```js
// instafeed
if (($('#instafeed').length) !== 0) {
  var userId = $('#instafeed').attr('data-userId');
  var accessToken = $('#instafeed').attr('data-accessToken');
  var userFeed = new Instafeed({
    get: 'user',
    userId: userId,
    resolution: 'low_resolution',
    accessToken: accessToken,
    limit: 6,
    template: '<div class="col-lg-2 col-md-3 col-sm-4 col-6 px-0 mb-4"><div class="instagram-post mx-2"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div></div>'
  });
  userFeed.run();
}
```
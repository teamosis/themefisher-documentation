---
title: 'How to change hero slider images and contents'
weight: 6
draft: false
---
Follow the steps to change hero slider contents

1\. HTML markup

```html
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

 <!– Indicators bullet –>
 <ol class="carousel-indicators">
 <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
 <li data-target="#carousel-example-generic" data-slide-to="1"></li>
 </ol>
 <!– End Indicators bullet –>

 <!– Wrapper for slides –>
 <div class="carousel-inner" role="listbox">

 <!– single slide –>
 <div class="item active" style="background-image: url(img/banner.jpg);">
 <div class="carousel-caption">
 <h2 data-wow-duration="700ms" data-wow-delay="500ms" class="wow bounceInDown animated">Meet<span> Brandi</span>!</h2>
 <h3 data-wow-duration="1000ms" class="wow slideInLeft animated"><span class="color">/creative</span> one page template.</h3>
 <p data-wow-duration="1000ms" class="wow slideInRight animated">We are a team of professionals</p>

 <ul class="social-links text-center">
 <li><a href=""><i class="fa fa-twitter fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-facebook fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-google-plus fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-dribbble fa-lg"></i></a></li>
 </ul>
 </div>
 </div>
 <!– end single slide –>

 <!– single slide –>
 <div class="item" style="background-image: url(img/banner.jpg);">
 <div class="carousel-caption">
 <h2 data-wow-duration="500ms" data-wow-delay="500ms" class="wow bounceInDown animated">Meet<span> Team</span>!</h2>
 <h3 data-wow-duration="500ms" class="wow slideInLeft animated"><span class="color">/creative</span> one page template.</h3>
 <p data-wow-duration="500ms" class="wow slideInRight animated">We are a team of professionals</p>

 <ul class="social-links text-center">
 <li><a href=""><i class="fa fa-twitter fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-facebook fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-google-plus fa-lg"></i></a></li>
 <li><a href=""><i class="fa fa-dribbble fa-lg"></i></a></li>
 </ul>
 </div>
 </div>
 <!– end single slide –>

 </div>
 <!– End Wrapper for slides –>

</div>
```

Change url of background for changing images `style="background-image: url(img/banner.jpg);"`  
and put your content under `carousel-caption` `class` as you want.

Bootstrap carousel is used for presenting the slider. Know more about bootstrap carousel visit the following link – <https://getbootstrap.com/docs/3.3/javascript/#carousel>
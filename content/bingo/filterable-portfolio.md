---
title: 'Filterable portfolio'
weight: 11
draft: false
---


We have used `mixitup` filtering plugin to filter the works  
1\. Html Markup Set  
**html markup**  
```html
<div class="portfolio-filter">
 <ul>
 <li class="filter" data-filter="all">Show All</li>
 <li class="filter" data-filter=".photography">Photoraphy</li>
 <li class="filter" data-filter=".design">Design</li>
 </ul>
</div>

<div id="portfolio-items-wrapper">
 <div class="row">
 <div class="col-md-3 col-sm-6 col-xs-6 mix photography" >
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-1.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix photography" >
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-2.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix photography" >
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-3.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix photography" >
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-4.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix design">
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-5.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix design">
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-6.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix design">
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-7.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 <div class="col-md-3 col-sm-6 col-xs-6 mix design">
 <div class="portfolio-block">
 <img class="img-responsive" src="img/portfolio/portfolio-1.jpg" alt="">
 <div class="caption">
 <a class="search-icon" href="img/portfolio/portfolio-1.jpg" data-lightbox="image-1">
 <i class="tf-search"></i>
 </a>
 <h4><a href="">AirBnB Postcard</a></h4>
 </div>
 </div>
 </div>
 </div>
</div>
```

Add your menu with `data-filter` for filtering your contents. Then add `mix` and the `data-filter` name your want filter on your content.

2\. Mixitup initialization on `custom.js` file

**jQuery code**  
```js
$(function(){  
 $(‘#portfolio-items-wrapper’).mixItUp();  
});  
```

initialize with the id of your contents `parent`

If you want to know more about mixitup try this following link – <https://www.kunkalabs.com/mixitup/>
---
title: 'Filterable portfolio'
weight: 11
draft: false
---

We have used `mixitup` filtering plugin to filter the works  
1\. Html Markup Set  
**html markup**  
```html
<div class="protfolio-mixitup-btn text-center">
 <button class="filter btn btn-default th-btn" data-filter=".all">all</button>
 <button class="filter btn btn-default th-btn" data-filter=".category-1">branding</button>
 <button class="filter btn btn-default th-btn" data-filter=".category-2">User interface</button>
 <button class="filter btn btn-default th-btn" data-filter=".category-3">print design</button>
</div>
<div id="Container">
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-1" data-my-order="1">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img1.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-2" data-my-order="2">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img2.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-3" data-my-order="3">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img3.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-1" data-my-order="1">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img4.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-2" data-my-order="2">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img5.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
 <div class="mix col-md-4 col-sm-6 col-xs-12 all category-3" data-my-order="3">
 <div class="portfolio-list">
 <a href="portfolio-single.html">
 <div class="th-mouse-portfolio-card">
 <div class="thumbnail portfolio-thumbnail">
 <img src="img/portfolio/portfolio-img6.jpg" alt="Portfolio">
 <div class="caption portfolio-caption">
 <p class="date">16.03.2015</p>
 <h3 class="portfolio-title">Merit wogmonk</h3>
 <p class="portfolio-subtitle">Branding</p>
 </div>
 </div>
 </div>
 </a>
 </div>
 </div>
</div>
```

Add your menu with `data-filter` for filtering your contents. Then add `mix` and the `data-filter` name your want filter on your content.

2\. Mixitup initialization on `script.js` file

**jQuery code**  
```js
// Mixit Up  
$(‘#Container’).mixItUp({  
 animation: {  
 duration: 1000  
 }  
});  
```

initialize with the id of your contents `parent`

If you want to know more about mixitup try this following link – <https://www.kunkalabs.com/mixitup/>
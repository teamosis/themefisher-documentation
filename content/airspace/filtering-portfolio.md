---
title: 'Filtering Portfolio'
weight: 7
draft: false
---

We have used `mixitup` filtering plugin to filter the works  
1\. Html Markup Set  
**html markup**  
```html
<div class="block">
  <div class="portfolio-menu">
    <ul>
      <li class="filter" data-filter="all">Everything</li>
      <li class="filter" data-filter=".Branding">Branding</li>
      <li class="filter" data-filter=".Websites">Websites</li>
      <li class="filter" data-filter=".Graphic">Graphic</li>
      <li class="filter" data-filter=".design">design</li>
      <li class="filter" data-filter=".Video">Video</li>
    </ul>
  </div>
  <div class="portfolio-contant">
    <ul id="portfolio-contant-active">
      <li class="mix Branding">
        <a href="#">
          <img src="img/portfolio/work1.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>
        </a>
      </li>
      <li class="mix Websites">
        <a href="#">
          <img src="img/portfolio/work2.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>
        </a>
      </li>
      <li class="mix Graphic">
        <a href="#">
          <img src="img/portfolio/work3.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>

        </a>
      </li>
      <li class="mix design">
        <a href="#">
          <img src="img/portfolio/work4.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>
        </a>
      </li>
      <li class="mix Video">
        <a href="#">
          <img src="img/portfolio/work5.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>
        </a>
      </li>
      <li class="mix Graphic">
        <a href="#">
          <img src="img/portfolio/work6.jpg" alt="">
          <div class="overly">
            <div class="position-center">
              <h2>Tesla Motors</h2>
              <p>Labore et dolore magna aliqua. Ut enim ad </p>

            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
```

Add your menu with `data-filter` for filtering your contents. Then add `mix` and the `data-filter` name your want filter on your content.

2\. Mixitup initialization on `main.js` file

**jQuery code**  
```js
$("#portfolio-contant-active").mixItUp();  
```

initialize with the id of your contents `parent`

If you want to know more about mixitup try this following link – <https://www.kunkalabs.com/mixitup/>
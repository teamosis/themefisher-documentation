---
title: 'Filtering portfolio'
weight: 7
draft: false
---

We have used `mixitup` filtering plugin to filter the works  
1\. Html Markup Set  
**html markup**  
```html
//filter menu  
<div class="work-filter wow fadeInRight animated" data-wow-duration="500ms">
 <ul class="text-center">
 <li><a href="javascript:;" data-filter="all" class="active filter">All</a></li>
 <li><a href="javascript:;" data-filter=".branding" class="filter">Branding</a></li>
 <li><a href="javascript:;" data-filter=".web" class="filter">web</a></li>
 <li><a href="javascript:;" data-filter=".logo-design" class="filter">logo design</a></li>
 <li><a href="javascript:;" data-filter=".photography" class="filter">photography</a></li>
 </ul>
</div>
//project filtering  
<div class="project-wrapper">

 <figure class="mix work-item branding">
 <img src="img/works/item-1.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-1.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item web">
 <img src="img/works/item-2.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-2.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item logo-design">
 <img src="img/works/item-3.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-3.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item photography">
 <img src="img/works/item-4.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-4.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item branding">
 <img src="img/works/item-5.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-5.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item web">
 <img src="img/works/item-6.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-6.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item logo-design">
 <img src="img/works/item-7.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-7.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

 <figure class="mix work-item photography">
 <img src="img/works/item-8.jpg" alt="">
 <figcaption class="overlay">
 <a class="fancybox" rel="works" title="Write Your Image Caption Here" href="img/works/item-8.jpg"><i class="fa fa-eye fa-lg"></i></a>
 <h4>Labore et dolore magnam</h4>
 <p>Photography</p>
 </figcaption>
 </figure>

</div>
```

Add your menu with `data-filter` for filtering your contents. Then add `mix` and the `data-filter` name your want filter on your content.

2\. Mixitup initialization on `custom.js` file

**jQuery code**  
```js
$(".project-wrapper").mixItUp();  
```

initialize with the id of your contents `parent`

If you want to know more about mixitup try this following link – <https://www.kunkalabs.com/mixitup/>
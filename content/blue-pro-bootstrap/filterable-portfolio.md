---
title: 'Filterable Portfolio'
weight: 11
draft: false
---
Isotope plugin is being used in the project to filter the portfolio item in this template.

Follow the steps for customization

1\. Create all filter menu with `data-filter`  
```html
<ul class="portfolio-filter text-center">
 <li><a href="#" data-filter="\*" class="active">All</a></li>
 <li><a href="#" data-filter=".photoshop">Photoshop</a></li>
 <li><a href="#" data-filter=".responsive">Responsive</a></li>
 <li><a href="#" data-filter=".wordpress">WordPress</a></li>
 <li><a href="#" data-filter=".illustrator">Illustrator</a></li>
</ul>
```

2\. Add `data-filter` as class in your items  
```html
<div class="row project-wrapper">
 <div class="col-sm-6 col-md-4 photoshop">
 <div class="portfolio-item">
 ..  
 </div>
 </div>

 <div class="col-sm-6 col-md-4 responsive">
 <div class="portfolio-item">
 ..  
 </div>
 </div>

 <div class="col-sm-6 col-md-4 wordpress">
 <div class="portfolio-item">
 ..  
 </div>
 </div>

 <div class="col-sm-6 col-md-4 illustrator">
 ..  
 </div>

 <div class="col-sm-6 col-md-4 photoshop">
 <div class="portfolio-item">
 ..  
 </div>
 </div>

 <div class="col-sm-6 col-md-4 illustrator">
 <div class="portfolio-item">
 ..  
 </div>
 </div>
</div>
```

3\. Then Initialize them in jQuery with isotope to work perfectly  
```html
/\* ========================================================================= \*/  
/\* Portfolio  
/\* ========================================================================= \*/  
var $projectWrapper = $(‘.project-wrapper’);  
$projectWrapper.isotope({  
 filter: ‘\*’,  
 animationOptions: {  
 duration: 750,  
 easing: ‘linear’,  
 queue: false  
 }  
});

$(‘.portfolio-filter a’).click(function(){  
 $(‘.portfolio-filter .active’).removeClass(‘active’);  
 $(this).addClass(‘active’);

 var selector = $(this).attr(‘data-filter’);  
 $projectWrapper.isotope({  
 filter: selector,  
 animationOptions: {  
 duration: 750,  
 easing: ‘linear’,  
 queue: false  
 }  
 });  
 return false;  
});  
```

If you want to know more about isotope plugin and it’s settings then follow the link – <https://isotope.metafizzy.co/>
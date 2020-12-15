---
title: 'How to change hero slider image and contents'
weight: 8
draft: false
---
Steps for change hero slider is given below  
1\. HTML Markup  
```html
<div id="slider" class="sl-slider-wrapper">

 <div class="sl-slider">

 <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
 <div class="mask-overly"></div>
 <div class="bg-img slider-1"></div>

 <div class="slide-caption">
 <div class="caption-content">
 <h2 class="animated fadeInDown">
 Amazing Business Template For Your Business  
 </h2>
 <p class="animated fadeInDown">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
 <a href="#" class="btn btn-blue btn-effect">Join US</a>
 </div>
 </div>

 </div>

 <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
 <div class="mask-overly"></div>
 <div class="bg-img slider-2"></div>
 <div class="slide-caption">
 <div class="caption-content">
 <h2 class="animated fadeInDown">Amazing Business Template For Your Business</h2>
 <p class="animated fadeInDown">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
 <a href="#" class="btn btn-blue btn-effect">Join US</a>
 </div>
 </div>

 </div>

 <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
 <div class="mask-overly"></div>
 <div class="bg-img slider-3"></div>
 <div class="slide-caption">
 <div class="caption-content">
 <h2 class="animated fadeInDown">Amazing Business Template For Your Business</h2>
 <p class="animated fadeInDown">
 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.  
 </p>
 <a href="#" class="btn btn-blue btn-effect">Join US</a>
 </div>
 </div>

 </div>

 </div><!– /sl-slider –>

 <nav id="nav-arrows" class="nav-arrows hidden-xs hidden-sm visible-md visible-lg">
 <a href="javascript:;" class="sl-prev">
 <i class="fa fa-angle-left fa-3x"></i>
 </a>
 <a href="javascript:;" class="sl-next">
 <i class="fa fa-angle-right fa-3x"></i>
 </a>
 </nav>

 <nav id="nav-dots" class="nav-dots visible-xs visible-sm hidden-md hidden-lg">
 <span class="nav-dot-current"></span>
 <span></span>
 <span></span>
 </nav>

</div><!– /slider-wrapper –>
```

2\. Changing image add your image path in background class of images in `slit-slider.css` file.

```css
.slider-1 {  
 background-image: url(../img/slider/slider-1.jpeg);  
}  
.slider-2 {  
 background-image: url(../img/slider/slider-2.jpg);  
}  
.slider-3 {  
 background-image: url(../img/slider/slider-3.jpeg);  
}  
```

for changing content of slider replace the text in `caption-content` class.

We using **Slit Slider** for slider. You can see the detailed documentation on this [page](https://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/).
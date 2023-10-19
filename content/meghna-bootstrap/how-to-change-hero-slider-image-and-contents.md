---
title: 'How to change Hero Slider image and contents'
weight: 8
draft: false
---
Steps for change hero slider is given below  
1\. HTML Markup  
```html
<div id="slitSlider" class="sl-slider-wrapper">
 <div class="sl-slider">

 <!– single slide item –>
 <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
 <div class="sl-slide-inner">
 <div class="bg-img bg-img-1"></div>
 <div class="carousel-caption">
 <div>
 <img class="wow fadeInUp" src="img/meghna.png" alt="Meghna">
 <h2 data-wow-duration="500ms" data-wow-delay="500ms" class="heading animated fadeInRight">Welcome To Meghna</h2>
 </div>
 </div>
 </div>
 </div>
 <!– /single slide item –>

 <!– single slide item –>
 <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
 <div class="sl-slide-inner">
 <div class="bg-img bg-img-2"></div>
 <div class="carousel-caption">
 <div>
 <h2 class="heading animated fadeInDown">Highly Responsive</h2>
 <h3 class="animated fadeInUp">With all Mejor Browser support including IE 9</h3>
 <a class="btn btn-green animated fadeInUp" href="#">Get Started</a>
 </div>
 </div>
 </div>
 </div>
 <!– /single slide item –>

 <!– single slide item –>
 <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
 <div class="sl-slide-inner">
 <div class="bg-img bg-img-3"></div>
 <div class="carousel-caption">
 <div>
 <h2 class="heading animated fadeInRight">One Page Parallax HTML Template</h2>
 <h3 class="animated fadeInLeft">Clean and Professional Design</h3>
 <a class="btn btn-green animated fadeInUp" href="#">Learn More</a>
 </div>
 </div>
 </div>
 </div>
 <!– /single slide item –>

 </div><!– /sl-slider –>

 <nav id="nav-arrows" class="nav-arrows">
 <span class="nav-arrow-prev">Previous</span>
 <span class="nav-arrow-next">Next</span>
 </nav>

 <nav id="nav-dots" class="nav-dots">
 <span class="nav-dot-current"></span>
 <span></span>
 <span></span>
 </nav>

</div><!– /slider-wrapper –>
```

2.Changing image add your image path in background class of images in `slit-slider.css` file.

```css
.bg-img-1 {  
 background-image: url(../img/slider/banner.jpg);  
}  
.bg-img-2 {  
 background-image: url(../img/slider/affinity.jpeg);  
}  
.bg-img-3 {  
 background-image: url(../img/slider/cinelli.jpeg);  
}  
```

for changing content of slider replace the text in `caption-content` class.

We using **Slit Slider** for slider. You can see the detailed documentation on this [page](https://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/).
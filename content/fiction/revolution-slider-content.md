---
title: 'Revolution Slider Content'
weight: 6
draft: false
---

Revolution Slider is used for banner slides in Bingo. Code for slider is given below

```html
<!– START REVOLUTION SLIDER 5.0 –>
<div class="rev\_slider\_wrapper">
 <div id="tf\_rev\_slider" class="rev\_slider" data-version="5.0">
 <ul>
 <li data-transition="random">
 <!– MAIN IMAGE –>
 <img src="img/header\_bg/banner-img.jpg" alt="" width="1920" height="1280">
 <!– LAYER NR. 1 –>

 <!– layer no 1 –>
 <div class="tp-caption slide-title color tp-resizeme"  
 data-x="center"  
 data-hoffset="0"  
 data-y="center"  
 data-voffset="-80"  
 data-whitespace="nowrap"  
 data-mask\_in="x:0px;y:0px;s:inherit;e:inherit;"  
 data-start="1800"  
 data-transform\_in="y:-50;s:700;"  
 >
 <h1 class="slider\_text text-center">We’re Creative</h1>
 </div>

 <!– layer no 3 –>
 <div class="tp-caption slide-title tp-resizeme"  
 data-x="center"  
 data-hoffset="0"  
 data-y="center"  
 data-voffset="0"  
 data-whitespace="nowrap"  
 data-mask\_in="x:0px;y:0px;s:inherit;e:inherit;"  
 data-start="2800"  
 data-transform\_in="x:-50;s:700;">
 <h1 class="slider\_text text-center">We Ensure Quality Design</h1>
 </div>
 </li>
 <li data-transition="random">
 <!– MAIN IMAGE –>
 <img src="img/header\_bg/blog-folding-img.jpg" alt="" width="1920" height="1280">
 <!– layer no 1 –>
 <div class="tp-caption slide-title color tp-resizeme"  
 data-x="center"  
 data-hoffset="0"  
 data-y="center"  
 data-voffset="-100"  
 data-whitespace="nowrap"  
 data-mask\_in="x:0px;y:0px;s:inherit;e:inherit;"  
 data-start="1800"  
 data-transform\_in="y:-50;s:700;"  
 >
 <h1 class="text-center">A Creative Agency Template</h1>
 </div>

 <!– layer no 3 –>
 <div class="tp-caption slide-title tp-resizeme"  
 data-x="center"  
 data-hoffset="0"  
 data-y="center"  
 data-voffset="0"  
 data-whitespace="nowrap"  
 data-mask\_in="x:0px;y:0px;s:inherit;e:inherit;"  
 data-start="2800"  
 data-transform\_in="x:-50;s:700;">
 <p class="text-center">Create just what you need for your Perfect Website. Choose from a wide range <br> of Elements &amp; simply put them on our Canvas.</p>
 </div>
 </li>

 </ul>
 </div><!– END REVOLUTION SLIDER –>
</div><!– END OF SLIDER WRAPPER –>
```

Change background image of slider from `img` tag. And Edit captions in `tp-caption` class `layers`.

For more check the revo slider documentation – <https://www.themepunch.com/revslider-doc/slider-revolution-documentation/>
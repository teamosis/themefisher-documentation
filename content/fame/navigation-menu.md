---
title: 'Navigation Menu'
weight: 4
draft: false
---

Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– Collect the nav links, forms, and other content for toggling –>
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 <ul class="nav navbar-nav navbar-right">
 <li class="hidden">
 <a href="#page-top"></a>
 </li>
 <li>
 <a class="page-scroll" href="#feature">Feature</a>
 </li>
 <li>
 <a class="page-scroll" href="#portfolio">Portfolio</a>
 </li>
 <li>
 <a class="page-scroll" href="#about-us">About</a>
 </li>
 <li>
 <a class="page-scroll" href="#service">Services</a>
 </li>
 <li>
 <a class="page-scroll" href="#team">Team</a>
 </li>
 <li>
 <a class="page-scroll" href="#pricing">Pricing</a>
 </li>
 <li>
 <a class="page-scroll" href="#latest-news">Latest News</a>
 </li>
 <li>
 <a class="page-scroll" href="#testimonial">Testimonials</a>
 </li>
 <li>
 <a class="page-scroll" href="#partner">Partner</a>
 </li>
 <li>
 <a class="page-scroll" href="#contact">Contact</a>
 </li>
 </ul>
</div>
<!– /.navbar-collapse –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the id of that specific section in `href` attribute for transfer the view port to that section.

2\. Set your id on section

\[code language=”html”\]

<section id="feature">
 ….  
</section>

```
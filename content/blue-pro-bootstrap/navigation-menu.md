---
title: 'Navigation menu'
weight: 4
draft: false
---

Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– main nav –>
<nav class="collapse navbar-collapse navbar-right" role="navigation">
 <ul id="nav" class="nav navbar-nav menu">
 <li><a href="#body"><span>Home</span></a></li>
 <li><a href="#service"><span>Service</span></a></li>
 <li><a href="#portfolio"><span>portfolio</span></a></li>
 <li><a href="#testimonials"><span>Testimonial</span></a></li>
 <li><a href="#price"><span>price</span></a></li>
 <li><a href="#contact"><span>Contact</span></a></li>
 </ul>
</nav>
<!– /main nav –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the id of that specific section in `href` attribute for transfer the view port to that section.

2\. Set your id on section

\[code language=”html”\]

<section id="about" class="bg-one">
 ….  
</section>

```
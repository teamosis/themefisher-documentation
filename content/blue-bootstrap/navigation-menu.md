---
title: 'Navigation Menu'
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below

```html
<!– main nav –>
<nav class="collapse navbar-collapse navbar-right" role="navigation">
 <ul id="nav" class="nav navbar-nav">
 <li><a href="#body">Home</a></li>
 <li><a href="#service">Service</a></li>
 <li><a href="#portfolio">portfolio</a></li>
 <li><a href="#testimonials">Testimonial</a></li>
 <li><a href="#price">price</a></li>
 <li><a href="#contact">Contact</a></li>
 </ul>
</nav>
<!– /main nav –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the id of that specific section in `href` attribute for transfer the view port to that section.
---
title: 'Navigation Menu'
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– main menu –>
<nav class="collapse navbar-collapse navbar-right" role="navigation">
 <div class="main-menu">
 <ul class="nav navbar-nav navbar-right">
 <li>
 <a href="index.html" >Home</a>
 </li>
 <li><a href="about.html">About</a></li>
 <li><a href="service.html">Service</a></li>
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
 <div class="dropdown-menu">
 <ul>
 <li><a href="404.html">404 Page</a></li>
 <li><a href="gallery.html">Gallery</a></li>
 </ul>
 </div>
 </li>
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <span class="caret"></span></a>
 <div class="dropdown-menu">
 <ul>
 <li><a href="blog-fullwidth.html">Blog Full</a></li>
 <li><a href="blog-left-sidebar.html">Blog Left sidebar</a></li>
 <li><a href="blog-right-sidebar.html">Blog Right sidebar</a></li>
 </ul>
 </div>
 </li>
 <li><a href="contact.html">Contact</a></li>
 </ul>
 </div>
</nav>
<!– /main nav –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the id of that specific section in `href` attribute for transfer the view port to that section.

2\. Set your id on section

\[code language=”html”\]

<section id="features">
 ….  
</section>

```
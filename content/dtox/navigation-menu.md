---
title: 'Navigation menu'
weight: 3
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– Themefisher Navigation –>  
<div class="navbar">  
 <button type="button" class="navbar-toggler"><i class="tf-ion-close"></i></button>  
 <nav>  
 <ul class="navbar-nav">  
 <li><a href="index.html">Home</a></li>  
 <li><a href="services.html">Services</a></li>  
 <li><a href="portfolio.html">Portfolio</a></li>  
 <li><a href="blog.html">Blog</a></li>  
 <li><a href="contact.html">Contact</a></li>  
 </ul>  
 </nav>  
</div><!–/.End Nav –>  
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `li` on the navigation menu you have to add the page in `href` attribute for link that page.  
Use dropdown class to for add dropdown menus. For more details visit bootstrap nav page – <https://getbootstrap.com/docs/3.3/components/#navbar>
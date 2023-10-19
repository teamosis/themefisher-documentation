---
title: 'Navigation Menu'
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– Start Navigation List –>
<ul class="nav navbar-nav navbar-right">
 <li>
 <a class="active" href="index.html">Home</a>
 </li>
 <li>
 <a href="about.html">About Us</a>
 </li>
 <li>
 <a href="service.html">Service</a>
 </li>
 <li>
 <a href="portfolio.html">Portfolio</a>
 </li>
 <li>
 <a href="blog.html">Blog</a>
 <ul class="dropdown">
 <li>
 <a href="blog-item.html">Item Page</a>
 </li>
 </ul>
 </li>
 <li><a href="contact.html">Contact</a>
 </li>
</ul>
<!– End Navigation List –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the page in `href` attribute for link that page.  
Use dropdown class to for add dropdown menus. For more details visit bootstrap nav page – <https://getbootstrap.com/docs/3.3/components/#navbar>
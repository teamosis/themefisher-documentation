---
title: 'Navigation Menu'
weight: 3
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<ul class="navbar-nav ml-auto main-nav ">
 <li class="nav-item active">
 <a class="nav-link" href="index.html">Home</a></li>
 <li class="nav-item dropdown dropdown-slide">
 <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="">Dashboard<span><i class="fa fa-angle-down"></i></span>
</a>

<!– Dropdown list –>
<div class="dropdown-menu">
 <a class="dropdown-item" href="dashboard.html">Dashboard</a>
<a class="dropdown-item" href="dashboard-my-ads.html">Dashboard My Ads</a>
<a class="dropdown-item" href="dashboard-favourite-ads.html">Dashboard Favourite Ads</a>
<a class="dropdown-item" href="dashboard-archived-ads.html">Dashboard Archived Ads</a>
<a class="dropdown-item" href="dashboard-pending-ads.html">Dashboard Pending Ads</a></div></li>
</ul>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `li` on the navigation menu you have to add the page in `href` attribute for link that page.  
Use dropdown class to for add dropdown menus. For more details visit bootstrap nav page – <https://getbootstrap.com/docs/3.3/components/#navbar>
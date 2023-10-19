---
title: 'Navigation Menu'
weight: 5
draft: false
---
In navigation menu if you wanna add the page link you can extend the `nav-item` is given below from `navbar-nav`. For add dropdown list in navigation menu add `dropdown-menu` class and add `dropdown-item` under the `dropdown-menu`. An example is given below.

```html
<ul class="navbar-nav">
 <li class="nav-item dropdown active dropdown-slide">
 <a class="nav-link" href="#" data-toggle="dropdown">Link with dropdown  
 <span><i class="tf-ion-ios-arrow-down"></i></span>
 </a>
 <!– Dropdown list –>
 <div class="dropdown-menu">
 <a class="dropdown-item" href="#">dropdown one</a>
 <a class="dropdown-item" href="#">dropdown two</a>
 <a class="dropdown-item" href="#">dropdown three</a>
 </div>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">without dropdown</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">without dropdown</a>
 </li>
</ul>
```
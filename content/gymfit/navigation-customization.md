---
title: 'Navigation Customization'
weight: 4
draft: false
---
 Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<ul class="navbar-nav mx-auto">
  <li class="nav-item active">
  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
  </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages.</a>
    <ul class="dropdown-menu text-center" aria-labelledby="dropdown03">
      <li><a class="dropdown-item" href="about.html">About</a></li>
      <li><a class="dropdown-item" href="trainer.html">Trainer</a></li>
      <li><a class="dropdown-item" href="course.html">Courses</a></li>
    </ul>
  </li>
  <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
</ul>
```
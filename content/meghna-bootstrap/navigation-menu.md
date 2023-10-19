---
title: 'Navigation Menu'
weight: 5
draft: false
---
Customization of navigation menu is easy. Steps for navigation menu change is given below

1\. HTML Setup

```html
<!– main nav –>

<nav class="collapse navbar-collapse navbar-right" role="Navigation">

<ul id="nav" class="nav navbar-nav">

<li class="current"><a href="#body">Home</a></li>

<li><a href="#about">About Us</a></li>

<li><a href="#services">Services</a></li>

<li><a href="#showcase">Portfolio</a></li>

<li><a href="#our-team">Team</a></li>

<li><a href="#pricing">Pricing</a></li>

<li><a href="#blog">Blog</a></li>

<li><a href="#contact-us">Contact</a></li>

 </ul>

</nav>

<!– /main nav –>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the id of that specific section in `href` attribute for transfer the view port to that section.

`current` is for current section you are in now.

2\. Set your id on section

\[code language=”html”\]

<section id="about" class="bg-one">
 ….  
</section>

```
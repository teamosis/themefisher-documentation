---
title: 'Navigation Menu'
weight: 5
draft: false
---

Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– main nav –>
<nav class="collapse navbar-collapse navbar-right" role="navigation">
 <ul id="nav" class="nav navbar-nav">
 <li class="current"><a href="#body">Home</a></li>
 <li><a href="#features">Features</a></li>
 <li><a href="#works">Work</a></li>
 <li><a href="#team">Team</a></li>
 <li><a href="http://google.com">Contact</a></li>
 </ul>
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
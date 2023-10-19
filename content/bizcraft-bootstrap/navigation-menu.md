---
title: 'Navigation Menu'
weight: 5
draft: false
---
 Customization of the navigation menu is easy. The code for the navigation menu is given below.

```html
<div class="collapse navbar-collapse text-center" id="navigation">
	<ul class="navbar-nav ml-auto">
		<li class="nav-item dropdown active">
			<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home </a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="index.html">Homepage 1</a>
				<a class="dropdown-item" href="index-2.html">Homepage 2</a>
				<a class="dropdown-item" href="index-3.html">Homepage 3</a>
				<a class="dropdown-item" href="index-4.html">Homepage 4</a>
			</div>
		</li>
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Company </a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="about.html">About Us</a>
				<a class="dropdown-item" href="service.html">Services</a>
				<a class="dropdown-item" href="career.html">Career</a>
				<a class="dropdown-item" href="testimonial.html">Testimonials</a>
				<a class="dropdown-item" href="faq.html">Faq</a>
			</div>
		</li>
		<li class="nav-item dropdown">
		      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="portfolio-classic.html">Portfolio Classic</a>
				<a class="dropdown-item" href="portfolio-static.html">Portfolio Static</a>
				<a class="dropdown-item" href="portfolio-item.html">Portfolio Single</a>
			</div>
		</li>
		
		<li class="nav-item">
			<a class="nav-link" href="contact.html">Contact</a></a>
		</li>
	</ul>
</div>
```
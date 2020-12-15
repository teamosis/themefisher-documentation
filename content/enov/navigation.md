---
title: Navigation
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below

HTML Customize

```html
<nav class="navbar navbar-expand-lg  main-nav py-3" id="navbar">
	<div class="container">
		<a class="navbar-brand" href="index.html">
			Sul<span>fur.</span>
		</a>

		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
		<span class="fa fa-bars"></span>
		</button>
	
		<div class="collapse navbar-collapse" id="navbarsExample09">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item active">
				<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
				<li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
				<li class="nav-item"><a class="nav-link" href="project.html">Portfolio</a></li>
				<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog +</a>
				<ul class="dropdown-menu" aria-labelledby="dropdown05">
					<li><a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
					<li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

					<li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
				</ul>
			</li>
				<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
		</ul>

		<a href="#" class="quote-btn ml-4 bg-primary text-white rounded-btn letter-spacing text-uppercase" >Get a free Quote <i class="ti-angle-right"></i></a>
		</div>
	</div>
</nav>
```
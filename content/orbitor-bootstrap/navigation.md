---
title: Navigation
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<nav class="navbar navbar-expand-lg py-4 navigation header-padding " id="navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="index.html">
			<img src="images/logo.png" alt="" class="img-fluid">
		</a>

		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
			aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span class="fa fa-bars"></span>
		</button>

		<div class="collapse navbar-collapse text-center" id="navbarsExample09">
			<ul class="navbar-nav m-auto">
				<li class="nav-item active">
					<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
				<li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>

				<li class="nav-item"><a class="nav-link" href="project.html">Portfolio</a></li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Blog</a>
					<ul class="dropdown-menu" aria-labelledby="dropdown05">
						<li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

						<li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
					</ul>
				</li>
				<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
			</ul>

			<a href="contact.html" class="btn btn-solid-border d-none d-lg-block">Get an estimate <i
					class="fa fa-angle-right ml-2"></i></a>
		</div>
	</div>
</nav>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new **nav-`item`** on the navigation menu you have to add the page in `href` attribute for link that page.
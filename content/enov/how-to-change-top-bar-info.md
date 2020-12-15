---
title: 'How to change Top bar info'
weight: 5
draft: false
---
Open your index.html file and change as below the code.

```html
<div class="header-top d-none d-md-block d-lg-block">
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-8 col-md-8">
				<div class="header-top-info">
					<a href="tel:+23-345-67890"><i class="fa fa-phone mr-2"></i><span>+23-345-67890</span></a>
					<a href="mailto:support@gmail.com" ><i class="fa fa-envelope mr-2"></i><span>support@gmail.com</span></a>
					<a href="themefisher.com"><i class="fa fa-globe mr-2"></i>Themefisher.com</a>
				</div>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="header-top-socials text-center text-lg-right">
					<a href="https://www.facebook.com/themefisher" target="_blank"><i class="ti-facebook"></i></a>
					<a href="https://twitter.com/themefisher" target="_blank"><i class="ti-twitter"></i></a>
					<a href="https://github.com/themefisher/" target="_blank"><i class="ti-github"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
```
---
title: Banner
weight: 5
draft: false
---
1. Customize html, Go to your index file and change the content of the banner.

```html
<section class="section-banner d-flex align-items-center">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 mr-auto">
				<div class="banner-content">
					<span>November 12, at 10.00am </span>
					<h1 class="mt-3 mb-5">The future <br>& Tech Expo</h1>
					<a href="#" class="btn btn-hero btn-rounded">Discover more</a>
				</div>
			</div>
		</div>
	</div>
</section>
```

2\. Customize image and banner height in css file in section as below.

```css
.section-banner{
	min-height:700px;
	background: url("../images/banner/banner-2.jpg")no-repeat;
}
```
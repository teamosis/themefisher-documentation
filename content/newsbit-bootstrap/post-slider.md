---
title: 'Post slider'
weight: 6
draft: false
---
Here is the post format in html

```html
<div class="post-block-wrapper clearfix mb-5">
	<div class="post-thumbnail">
		<a href="single-post.htm">
			<img class="img-fluid" src="images/news/news-01.jpg" alt="post-image" />
		</a>
	</div>
	<div class="post-content">
		<h2 class="post-title mt-3">
			<a href="single-post.html">Ex-Googler warns coding bootcamps are lacking</a>
		</h2>
		<div class="post-meta mb-2">
			<span class="posted-time"><i class="fa fa-clock-o mr-2"></i>5 hours ago</span>
			<span class="post-author">
				by
				<a href="author.html">Tarnak Sunder</a>
			</span>
		</div>
		<p>Suscipit beatae facilis doloribus aliquam sed expedita accusantium itaque assumenda laborum facere aliquid hic.
		</p>
	</div>
</div>
```

2\. Script customization for slider , Go to Scripts js file.

```js
//Latest news slide
$('.news-style-one-slide').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	draggable: true,
	loop:true,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
	]
});
```
---
title: 'Testimonial Slider'
weight: 6
draft: false
---
We have used Slick carousel slider in testimonial section. The basic structure of owl carousel is given below

1\. HTML markup setup

```html
<div class="text-center mb-4 ">
  <i class="ti-quote-left text-lg text-color"></i>
  <h3 class="mt-4 text-white letter-spacing">title</h3>
  <p class="my-4 text-white-50">content</p>
  <div>
    <h4 class="mb-0 text-capitalize text-white font-weight-normal">John Donas</h4>
    <span class="text-white-50">Manager</span>
  </div>
</div>
```

\*Change contents form `testimonial-block`.

 2. jQuery initialization

```js
$('.testimonial-slider').slick({
  slidesToShow: 1,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true
});
```
---
title: 'Product showcase slider'
weight: 7
draft: false
---

For product showcasing slider we use bootstrap carousel.

Basic markup for slider

```html
<div id="carousel-custom" class="carousel slide" data-ride="carousel">
  <div class="carousel-outer">
    <!– me art lab slider –>
      <div class="carousel-inner">
        <div class="item active">
          <img src="images/shop/single-products/product-1.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-1.jpg" />
        </div>
        <div class="item">
          <img src="images/shop/single-products/product-2.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-2.jpg" />
        </div>

        <div class="item">
          <img src="images/shop/single-products/product-3.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-3.jpg" />
        </div>
        <div class="item">
          <img src="images/shop/single-products/product-4.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-4.jpg" />
        </div>
        <div class="item">
          <img src="images/shop/single-products/product-5.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-5.jpg" />
        </div>
        <div class="item">
          <img src="images/shop/single-products/product-6.jpg" alt=”
            data-zoom-image="images/shop/single-products/product-6.jpg" />
        </div>

      </div>

      <!– sag sol –>
        <a class="left carousel-control" href="#carousel-custom" data-slide="prev">
          <i class="tf-ion-ios-arrow-left"></i>
        </a>
        <a class="right carousel-control" href="#carousel-custom" data-slide="next">
          <i class="tf-ion-ios-arrow-right"></i>
        </a>
  </div>

  <!– thumb –>
  <ol class="carousel-indicators mCustomScrollbar meartlab">
    <li data-target="#carousel-custom" data-slide-to="0" class="active">
      <img src="images/shop/single-products/product-1.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="1">
      <img src="images/shop/single-products/product-2.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="2">
      <img src="images/shop/single-products/product-3.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="3">
      <img src="images/shop/single-products/product-4.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="4">
      <img src="images/shop/single-products/product-5.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="5">
      <img src="images/shop/single-products/product-6.jpg" alt=” />
    </li>
    <li data-target="#carousel-custom" data-slide-to="6">
      <img src="images/shop/single-products/product-7.jpg" alt=” />
    </li>
  </ol>
</div>
```

1\. Change the images in `carousel-inner>item` and `carousel-indicators>li` for customize the slider.
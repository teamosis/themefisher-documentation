---
title: 'How to change Banner Image & Contents'
weight: 7
draft: false
---

We used fixed image in banner of `index-text.html` file. Code is given below

```html
<section class="hero-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <h1>We Create Beautiful Websites</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a data-scroll href="#services" class="btn btn-main">Explore Us</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

1\. Change contents from `block`

```css
.hero-area {  
 background-image: url("../img/slider/hero-img.jpg");  
 background-size: cover;
}  
```

2\. Change Image from hero area class in `style.css` file.
---
title: 'Portfolio Modal'
weight: 10
draft: false
---
1\. Basic structure to call modal in our template  
```html
<div class="portfolio-item">
 <img src="images/portfolio/img1.jpg" class="img-responsive" alt="" />
 <div class="portfolio-caption">
 <h4>Portfolio Title</h4>
 <a href="#portfolio-modal" data-toggle="modal" class="link-1"><i class="fa fa-magic"></i></a>
 <a href="#" class="link-2"><i class="fa fa-link"></i></a>
 </div>
</div>
```

`href="#portfolio-modal"` call modal with the id. `data-toggle="modal"` is for open the modal.

2\. Modal Structure  
```html
<div class="section-modal modal fade" id="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true">
 <div class="modal-content">
 <div class="close-modal" data-dismiss="modal">
 <div class="lr">
 <div class="rl">
 </div>
 </div>
 </div>

 <div class="container">
 <div class="row">
 <div class="section-title text-center">
 <h3>Portfolio Details</h3>
 <p>Duis aute irure dolor in reprehenderit in voluptate</p>
 </div>
 </div>
 <div class="row">

 <div class="col-md-6">
 <img src="images/portfolio/img1.jpg" class="img-responsive" alt="..">
 </div>
 <div class="col-md-6">
 <img src="images/portfolio/img1.jpg" class="img-responsive" alt="..">
 </div>

 </div><!– /.row –>
 </div>
 </div>
</div>
```

Put your contents in `container`.

Eager to know about bootstrap modal, Check this link – <https://getbootstrap.com/docs/3.3/javascript/#modals>
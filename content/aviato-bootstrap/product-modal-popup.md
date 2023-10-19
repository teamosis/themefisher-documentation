---
title: 'Product Modal Popup'
weight: 8
draft: false
---

Product Details are showed in modal in aviato.

1\. Basic structure to call modal in our template  
```html
<div class="preview-meta">
 <ul>
 <li>
 <span data-toggle="modal" data-target="#product-modal">
 <i class="tf-ion-ios-search-strong"></i>
 </span>
 </li>
 ………..  
 </ul>
</div>
```

`href="#product-modal"` call modal with the id. `data-toggle="modal"` is for open the modal.

2\. Modal Structure  
```html
<!– Modal –>
<div class="modal product-modal fade" id="product-modal">
 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
 <i class="tf-ion-close"></i>
 </button>
 <div class="modal-dialog " role="document">
 <div class="modal-content">
 <div class="modal-body">
 <div class="row">
 <div class="col-md-8 col-sm-6 col-xs-12">
 <div class="modal-image">
 <img class="img-responsive" src="images/shop/products/modal-product.jpg" alt="product-img" />
 </div>
 </div>
 <div class="col-md-4 col-sm-6 col-xs-12">
 <div class="product-short-details">
 <h2 class="product-title">GM Pendant, Basalt Grey</h2>
 <p class="product-price">$200</p>
 <p class="product-short-description">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.  
 </p>
 <a href="cart.html" class="btn btn-main">Add To Cart</a>
 <a href="product-single.html" class="btn btn-transparent">View Product Details</a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
</div><!– /.modal –>
```

Put your contents in `modal-body`.

Eager to know about bootstrap modal, Check this link – <https://getbootstrap.com/docs/3.3/javascript/#modals>
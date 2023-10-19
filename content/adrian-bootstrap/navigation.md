---
title: Navigation
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below

HTML Customize

```html
<nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
  <div class="container">
    <a class="navbar-brand font-weight-bold" href="index.html">
      <img src="images/logo.png" alt="Vaxon." class="img-fluid">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
      aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation" style="">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="main-navbar">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="about.html">About Us</a>
        </li>
        <!-- Pages -->
        <li class="nav-item dropdown dropdown-slide">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pages.
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="404.html">404 Page</a></li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </li><!-- /Pages -->
        <!-- / Blog -->

        <li class="nav-item dropdown dropdown-slide">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop.
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
            <li><a href="shop-sidebar.html">Shop</a></li>
            <li><a href="product-single.html">Product Details</a></li>
            <li><a href="checkout.html">Checkout</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="confirmation.html">Confirmation</a></li>
          </ul>
        </li><!-- / Blog -->

        <!-- Account -->
        <li class="nav-item dropdown dropdown-slide">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account.
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
            <li><a href="dashboard.html">Dahsboard</a></li>
            <li><a href="order.html">Orders</a></li>
            <li><a href="download.html">Downloads</a></li>
            <li><a href="address.html">Address</a></li>
            <li><a href="profile-details.html">Profile Details</a></li>
            <li><a href="account.html">Login Page</a></li>
            <li><a href="signup.html">SignUp Page</a></li>
          </ul>
        </li><!-- / Account -->

        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact Us</a>
        </li>
      </ul>
    </div>
    <!-- Navbar-collapse -->

    <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
      <li class="list-inline-item">
        <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
      </li>

      <li class="dropdown cart-nav dropdown-slide list-inline-item">
        <a href="#" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
          <i class="tf-ion-android-cart"></i>
        </a>
        <div class="dropdown-menu cart-dropdown">
          <!-- Cart Item -->
          <div class="media">
            <a href="#">
              <img class="media-object img- mr-3" src="images/shop/cart/cart-1.jpg" alt="image" />
            </a>
            <div class="media-body">
              <h6>Ladies Bag</h6>
              <div class="cart-price">
                <span>1 x</span>
                <span>1250.00</span>
              </div>
            </div>
            <a href="#" class="remove"><i class="tf-ion-close"></i></a>
          </div><!-- / Cart Item -->

          <!-- Cart Item -->
          <div class="media">
            <a href="#">
              <img class="media-object img-fluid mr-3" src="images/shop/cart/cart-2.jpg" alt="image" />
            </a>
            <div class="media-body">
              <h6>Skinny Jeans</h6>
              <div class="cart-price">
                <span>1 x</span>
                <span>1250.00</span>
              </div>
            </div>
            <a href="#" class="remove"><i class="tf-ion-close"></i></a>
          </div><!-- / Cart Item -->

          <div class="cart-summary">
            <span class="h6">Total</span>
            <span class="total-price h6">$1799.00</span>
            <div class="text-center cart-buttons mt-3">
              <a href="" class="btn btn-small btn-transparent btn-block">View Cart</a>
              <a href="" class="btn btn-small btn-main btn-block">Checkout</a>
            </div>
          </div>
        </div>
      </li>
      <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
    </ul>
  </div>
</nav>
```
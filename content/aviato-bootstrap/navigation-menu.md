---
title: 'Navigation Menu'
weight: 3
draft: false
---

Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<!– Main Menu Section –>
  <section class="menu">
    <nav class="navbar navigation">
      <div class="container">
        <div class="navbar-header">
          <h2 class="menu-title">Main Menu</h2>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
            aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        </div>
        <!– / .navbar-header –>

          <!– Navbar Links –>
            <div id="navbar" class="navbar-collapse collapse text-center">
              <ul class="nav navbar-nav">

                <!– Home –>
                  <li class="dropdown ">
                    <a href="index.html">Home</a>
                  </li>
                  <!– / Home –>

                    <!– Elements –>
                      <li class="dropdown dropdown-slide">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                          data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Shop <span
                            class="tf-ion-ios-arrow-down"></span></a>
                        <div class="dropdown-menu">
                          <div class="row">

                            <!– Basic –>
                              <div class="col-lg-6 col-md-6 mb-sm-3">
                                <ul>
                                  <li class="dropdown-header">Pages</li>
                                  <li role="separator" class="divider"></li>
                                  <li><a href="shop.html">Shop</a></li>
                                  <li><a href="checkout.html">Checkout</a></li>
                                  <li><a href="cart.html">Cart</a></li>
                                  <li><a href="pricing.html">Pricing</a></li>
                                  <li><a href="confirmation.html">Confirmation</a></li>

                                </ul>
                              </div>

                              <!– Layout –>
                                <div class="col-lg-6 col-md-6 mb-sm-3">
                                  <ul>
                                    <li class="dropdown-header">Layout</li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="product-single.html">Product Details</a></li>
                                    <li><a href="shop-sidebar.html">Shop With Sidebar</a></li>

                                  </ul>
                                </div>

                          </div>
                          <!– / .row –>
                        </div>
                        <!– / .dropdown-menu –>
                      </li>
                      <!– / Elements –>

                        <!– Pages –>
                          <li class="dropdown full-width dropdown-slide">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                              data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Pages <span
                                class="tf-ion-ios-arrow-down"></span></a>
                            <div class="dropdown-menu">
                              <div class="row">

                                <!– Introduction –>
                                  <div class="col-sm-3 col-xs-12">
                                    <ul>
                                      <li class="dropdown-header">Introduction</li>
                                      <li role="separator" class="divider"></li>
                                      <li><a href="contact.html">Contact Us</a></li>
                                      <li><a href="about.html">About Us</a></li>
                                      <li><a href="404.html">404 Page</a></li>
                                      <li><a href="coming-soon.html">Coming Soon</a></li>
                                      <li><a href="faq.html">FAQ</a></li>
                                    </ul>
                                  </div>

                                  <!– Contact –>
                                    <div class="col-sm-3 col-xs-12">
                                      <ul>
                                        <li class="dropdown-header">Dashboard</li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="dashboard.html">User Interface</a></li>
                                        <li><a href="order.html">Orders</a></li>
                                        <li><a href="address.html">Address</a></li>
                                        <li><a href="profile-details.html">Profile Details</a></li>
                                      </ul>
                                    </div>

                                    <!– Utility –>
                                      <div class="col-sm-3 col-xs-12">
                                        <ul>
                                          <li class="dropdown-header">Utility</li>
                                          <li role="separator" class="divider"></li>
                                          <li><a href="login.html">Login Page</a></li>
                                          <li><a href="signin.html">Signin Page</a></li>
                                          <li><a href="forget-password.html">Forget Password</a></li>
                                        </ul>
                                      </div>

                                      <!– Mega Menu –>
                                        <div class="col-sm-3 col-xs-12">
                                          <a href="shop.html">
                                            <img class="img-responsive" src="images/shop/header-img.jpg"
                                              alt="menu image" />
                                          </a>
                                        </div>
                              </div>
                              <!– / .row –>
                            </div>
                            <!– / .dropdown-menu –>
                          </li>
                          <!– / Pages –>

                            <!– Blog –>
                              <li class="dropdown dropdown-slide">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                                  data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Blog <span
                                    class="tf-ion-ios-arrow-down"></span></a>
                                <ul class="dropdown-menu">
                                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                  <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                  <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                  <li><a href="blog-grid.html">Blog 2 Columns</a></li>
                                  <li><a href="blog-single.html">Blog Single</a></li>
                                </ul>
                              </li>
                              <!– / Blog –>

                                <!– Shop –>
                                  <li class="dropdown dropdown-slide">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                                      data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Elements
                                      <span class="tf-ion-ios-arrow-down"></span></a>
                                    <ul class="dropdown-menu">
                                      <li><a href="typography.html">Typography</a></li>
                                      <li><a href="buttons.html">Buttons</a></li>
                                      <li><a href="alerts.html">Alerts</a></li>
                                    </ul>
                                  </li>
                                  <!– / Blog –>
              </ul>
              <!– / .nav .navbar-nav –>

            </div>
            <!–/.navbar-collapse –>
      </div>
      <!– / .container –>
    </nav>
  </section>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the page in `href` attribute for link that page.  
Use `dropdown` class to for add dropdown menus &amp; `dropdown-fullwidth` full width menu or mega menu. For more details visit bootstrap nav page – <https://getbootstrap.com/docs/3.3/components/#navbar>
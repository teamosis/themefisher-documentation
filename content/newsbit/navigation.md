---
title: Navigation
weight: 4
draft: false
---
Change navigation menu in html.

```html
<div class="main-navbar clearfix bg-dark ">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg site-main-nav navigation">
          <a class="navbar-brand d-lg-none" href="index.html">
            <img src="images/logos/footer-logo.png" alt="">
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Home
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="index.html">Home 1</a>
                  <a class="dropdown-item" href="index-2.html">Home 2</a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Post
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="post-left-sidebar.html">Post Left Sidebar</a>
                  <a class="dropdown-item" href="post-full-width.html">Post Full Width</a>
                  <a class="dropdown-item" href="single-post.html">Single Post</a>
                  <a class="dropdown-item" href="post-category-1.html">Category 1</a>
                  <a class="dropdown-item" href="post-category-2.html">Category 2</a>
                  <a class="dropdown-item" href="author.html">Author</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Account
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="account.html">Log In</a>
                  <a class="dropdown-item" href="signup.html">Register</a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  About
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="about.html">About</a>
                  <a class="dropdown-item" href="terms.html">Terms</a>
                  <a class="dropdown-item" href="privacy.html">Privacy Policy</a>
                  <a class="dropdown-item" href="job.html">Career</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Pages
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="404.html">404 Page</a>
                  <a class="dropdown-item" href="search.html">Search Page</a>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>

            </ul>
            <div class="nav-search ml-auto d-none d-lg-block">
              <span id="search">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </div>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new **nav-`item`** on the navigation menu you have to add the page in `href` attribute for link that page.
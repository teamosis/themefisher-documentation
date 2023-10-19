---
title: Navigation
weight: 4
draft: false
---
 Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<header class="header-bar">
  <nav class="navbar navbar-expand-lg main-nav">
    <div class="container">
      <!--      LOGO BAR     -->
      <a class="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="Vixcon" class="img-fluid logo-b ">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="tf-ion-android-menu"></span>
      </button>

      <!--  MAIN MENU  -->
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="speaker.html">Speakers</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown1" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages.
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a class="dropdown-item" href="about.html">About</a>
              <a class="dropdown-item" href="pricing.html">Tickets</a>
              <a class="dropdown-item" href="schedule.html">Schedule</a>
              <a class="dropdown-item" href="login.html">Login</a>
              <a class="dropdown-item" href="signup.html">Regstration</a>
              <a class="dropdown-item" href="error.html">404 Page</a>
              <a class="dropdown-item" href="faq.html">Supports</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown2" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog.
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <a class="dropdown-item" href="blog.html">Blog</a>
              <a class="dropdown-item" href="blog-single.html">Blog Single</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>

        <a href="pricing.html" class="btn btn-secondary btn-rounded mt-3 mt-lg-0">Get Ticket</a>
      </div>
    </div>
  </nav>
</header>
```

 You can add or replace the text for customizing the nav in `li` tag.  
If you add new **`nav-item`** on the navigation menu you have to add the page in `href` attribute for link that page.
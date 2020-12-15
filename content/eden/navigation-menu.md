---
title: 'Navigation Menu'
weight: 4
draft: false
---
Customization of navigation menu is easy. Code for navigation menu is given below  
1.HTML Customize

```html
<div class="collapse navbar-collapse" id="navbarsExample09">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active"> <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown2" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Pages</a>
      <ul class="dropdown-menu" aria-labelledby="dropdown2">
        <li><a class="dropdown-item" href="about.html">About Us</a></li>
        <li><a class="dropdown-item" href="service.html">Services</a></li>
        <li><a class="dropdown-item" href="search.html">Advance Search</a></li>
        <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
        <li><a class="dropdown-item" href="404.html">404 Not found</a></li>
        <li><a class="dropdown-item" href="contact.html">Contact Us</a></li>
        <li class="dropdown dropdown-submenu dropright"> <a class="nav-link dropdown-toggle" href="#" id="dropdown3"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown3">
            <li><a class="dropdown-item" href="gallery-3.html">Gallery 3 Col</a></li>
            <li><a class="dropdown-item" href="gallery-4.html">Gallery 4 Col</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Rooms</a>
      <ul class="dropdown-menu" aria-labelledby="dropdown02">
        <li><a class="dropdown-item" href="room-list.html">Room List</a></li>
        <li><a class="dropdown-item" href="room-grid.html">Room-grid</a></li>
        <li> <a class="dropdown-item" href="room-details.html">Room Details</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Reservation</a>
      <ul class="dropdown-menu" aria-labelledby="dropdown03">
        <li><a class="dropdown-item" href="booking-step1.html">Select Room</a></li>
        <li><a class="dropdown-item" href="booking-step2.html">Make Resrvation</a></li>
        <li><a class="dropdown-item" href="booking-step3.html">Payment</a></li>
        <li> <a class="dropdown-item" href="confirmation.html">Confirmation</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Events</a>
      <ul class="dropdown-menu" aria-labelledby="dropdown04">
        <li><a class="dropdown-item" href="event-fullwidth.html">Event Fullwidth</a></li>
        <li><a class="dropdown-item" href="event-grid.html">Event Grid</a></li>
        <li><a class="dropdown-item" href="event-single.html">Event Details</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Blog</a>
      <ul class="dropdown-menu" aria-labelledby="dropdown05">
        <li><a class="dropdown-item" href="blog-full-width.html">Blog Full width</a></li>
        <li><a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
        <li><a class="dropdown-item" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
        <li><a class="dropdown-item" href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
        <li><a class="dropdown-item" href="blog-single-right.html">Blog Details Right Sidebar</a></li>
        <li><a class="dropdown-item" href="blog-single.html">Blog Details Left Sidebar</a></li>
      </ul>
    </li>
  </ul>
  <form class="form-inline my-2 my-md-0 ml-lg-4"> <a href="booking-step1.html" class="btn btn-main">Book Online</a>
  </form>
</div>
```

You can add or replace the text for customizing the nav in `li` tag.  
If you add new `item` on the navigation menu you have to add the page in `href` attribute for link that page.  
Use `dropdown` class to for add dropdown menus &amp; `dropdown-fullwidth` full width menu or mega menu. For more details visit bootstrap nav page – <https://getbootstrap.com/docs/3.3/components/#navbar>
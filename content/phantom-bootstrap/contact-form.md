---
title: 'Contact form'
weight: 12
draft: false
---

Here is the following codes are for contact form. Its a working contact form , that means user can sent you emails form this form. To get emails you just need to open mail.php file and just put your email address in the very first line ” $to = “youremail@.com”; // replace this mail with yours”

```html
<div class="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
  <div class="section-title clear">Send me a meesage
    <span class="bar-dark"></span>
    <span class="bar-primary"></span>
  </div>
  <form action="#" class="row contact-form no-gutter" id="contact-form" method="post" novalidate="novalidate">
    <div class="col-xs-12 col-sm-6">
      <div class="input-field name"> <span class="input-icon" id="name"></span>
        <input class="form-control" name="name" placeholder="Enter your name" type="text"></input></div>
    </div>
    <div class="col-xs-12 col-sm-6">
      <div class="input-field email"> <span class="input-icon" id="email"></span>
        <input class="form-control" name="email" placeholder="Your email address" type="email"></input></div>
    </div>
    <div class="col-xs-12 col-sm-12">
      <div class="input-field"> <span class="input-icon" id="subject"></span>
        <input class="form-control" name="subject" placeholder="Enter the discussion title" type="text"></input></div>
    </div>
    <div class="col-xs-12 col-sm-12">
      <div class="input-field message"> <span class="input-icon" id="message"></span>
        <textarea class="form-control" id="message" name="message" placeholder="Write your message"></textarea></div>
    </div>
    <div class="col-xs-12 col-sm-12">
      <div class="input-field"> <span class="btn-border">
          <button class="btn btn-primary btn-custom-border text-uppercase" type="submit">Send Message now</button>
        </span> </div>
      <div class="msg-success">Your Message was sent successfully</div>
      <div class="msg-failed">Something went wrong, please try again later</div>
    </div>
  </form>
</div>
```
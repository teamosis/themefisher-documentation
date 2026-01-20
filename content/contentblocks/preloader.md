---
build:
  render: never
  list: never
  publishResources: false
---


You can change pre-loader of template form preloader section(which is located top of our template)

Code have been used for preloader is

#### HTML Code

```html
<!– preloader –>
<div id="preloader">
 <img src="img/preloader.gif" alt="Preloader">
</div>
<!– end preloader –>
```

#### jQuery Code for vanish the preloader after document load

```js
jQuery(window).load(function(){
 $("#preloader").fadeOut("slow");
});
```

We use a `gif` image for preloader. You can use css preloader also.

If you don’t know how to make custom preloader, this [article](https://ihatetomatoes.net/create-custom-preloading-screen/) might help you.

And you can find some attractive preloaders in this [page](http://tobiasahlin.com/spinkit/).

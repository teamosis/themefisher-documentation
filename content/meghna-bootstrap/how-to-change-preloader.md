---
title: 'How to change preloader'
weight: 6
draft: false
---

You can change pre-loader of template form preloader section(which is located top of our template)

Code have been used for preloader is

1\. HTML Code:

```html
<!– Start Preloader ==================================== –>

<div id="loading-mask">

<div class="loading-img">
 <img alt="Meghna Preloader" src="img/preloader.gif" />
 </div>

</div>

<!– End Preloader ==================================== –>
```

2\. jQuery Code for vanish the preloader after document load

```js
window.onload = function () {  
 document.getElementById(‘loading-mask’).style.display = ‘none’;  
}  
```

We use a `gif` image for preloader. You can use css preloader also.

If you don’t know how to make custom preloader, this [article](https://ihatetomatoes.net/create-custom-preloading-screen/) might help you.

And you can find some attractive preloaders in this [page](http://tobiasahlin.com/spinkit/).
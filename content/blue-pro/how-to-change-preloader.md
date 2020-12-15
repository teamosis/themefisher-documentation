---
title: 'How to change preloader'
weight: 5
draft: false
---
You can change pre-loader of template form preloader section(which is located top of our template)

Code have been used for preloader is

1\. HTML Code:  
```html
<!– preloader –>
<div id="preloader">
 <div class="loder-box">
 <div class="battery"></div>
 </div>
</div>
<!– end preloader –>
```

2\. CSS Code:  
```css
.battery{  
 width: 60px;  
 height: 25px;  
 top: 35%;  
 border: 1px #2E2E2E solid;  
 border-radius: 2px;  
 position: relative;  
 -webkit-animation: charge 5s linear infinite;  
 -moz-animation: charge 5s linear infinite;  
 animation: charge 5s linear infinite;  
 margin: 0 auto;  
}

.battery:after {  
 background-color: #2E2E2E;  
 border-radius: 0 1px 1px 0;  
 content: "";  
 height: 10px;  
 position: absolute;  
 right: -5px;  
 top: 7px;  
 width: 3px;  
}

@-webkit-keyframes charge{  
 0%{box-shadow: inset 0px 0px 0px #2E2E2E;}  
 100%{box-shadow: inset 60px 0px 0px #2E2E2E;}  
}

@-moz-keyframes charge{  
 0%{box-shadow: inset 0px 0px 0px #2E2E2E;}  
 100%{box-shadow: inset 60px 0px 0px #2E2E2E;}  
}

@keyframes charge{  
 0%{box-shadow: inset 0px 0px 0px #2E2E2E;}  
 100%{box-shadow: inset 60px 0px 0px #2E2E2E;}  
}  
```

Change `@keyframes` as you want to change the behavior of `preloader` or you can add your own `preloader`.

If you don’t know how to make custom preloader, this [article](https://ihatetomatoes.net/create-custom-preloading-screen/) might help you.

And you can find some attractive preloaders in this [page](http://tobiasahlin.com/spinkit/).
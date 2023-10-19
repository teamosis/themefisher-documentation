---
title: Fonts
weight: 8
draft: false
---
1. How to change font of the template. Go to your style.css file and customize the section as below.

```css
// Fonts 
@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700|Montserrat;:300,400,600,700,800|Source+Sans+Pro:300,400,600,700);
```

2\. How to change body font color , font sizes also. Take a look its simple as you want just customize your style file.

```CSS
body {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.166667px;
  line-height:1.7em;
  color: #7e8690;
}

p{
  color: #7e8690;
}

h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6 {
  font-family: $primary-font;
  color: $black;
  font-weight: 800;
  text-transform: capitalize;
}

h1 ,.h1{
  font-size: 45px;
  text-transform: none;
}

h2,.h2 {
  font-size: 42px;
  line-height: 52px;
}

h3,.h3 {
  font-size: 20px;
  line-height: 32px;
}

h4,.h4 {
  font-size: 18px;
  line-height: 30px;
}

h5,.h5 {
  font-size: 16px;
  line-height: 26px;
}

h6,.h6 {
  font-size: 14px;
}

.text-sm{
  font-size: 14px;
}
```
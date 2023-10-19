---
title: Fonts
weight: 6
draft: false
---
1\. How to change font of the template. Go to your style.css file and customize the section as below

```css
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700,800|Source+Sans+Pro:400|Catamaran:400,600,700');
```

2\. How to change body font color , font sizes also. Take a look its simple as you want just customize your style file.

```css
body {
  line-height: 1.7;
  font-family: 'Catamaran', sans-serif;;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
p {
  font-family: 'Source Sans Pro', sans-serif;
  color: #757575;
}
h1,h2,h3,h4,h5,h6 ,.h1,.h2,.h3,.h4,.h5,.h6{
  font-family: 'Catamaran', sans-serif;
  font-weight:600;
  color:#000;
}

h4,.h4{
  font-size: 22px;
}
h5,.h5{
  font-size: 18px;
}

h6,.h6{
  font-size: 16px;
}
```
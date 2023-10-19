---
title: Fonts
weight: 13
draft: false
---
1\. How to change font of the template. Go to your style.css file and customize the section as below

```css
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,600,600i,700,700i,800|Open+Sans:400,400i,600,600i,700,700i,800&display=swap');
```

2\. How to change body font color , font sizes also. Take a look its simple as you want just customize your style file.

```css
body,
p {
  font-family: "Open Sans", sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased !important;
  line-height: 26px;
  font-size: 15px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #212121;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased !important;
}
```
---
_build:
  render: never
  list: never
  publishResources: false
---

When someone buys a theme, they usually change the theme default colors, someone also changes the fonts. So here is the guide for how to do it.

`colors` change is very easy with the power of scss variables. Open `assets/scss/variables.scss` file in a text editor. Then you can see the global variables we used in this theme. `primary-color` defines the theme default color. If you change it the whole theme default colors will be changed when you compile the theme again. Sometimes it compiles but the browser shows the previous colors. Then you need to clear your browser cache and reload again. You can also change the other variable colors like this.

```scss
// Color Variables
$primary-color: #757fe6;
$text-color: #333;
$body-color: #fff;
$border-color: #E2E2E2;
```

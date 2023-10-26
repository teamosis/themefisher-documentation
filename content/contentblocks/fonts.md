---
_build:
  render: never
  list: never
  publishResources: false
---

`font-family` name is defined in the `source/scss/variables.scss` files. If you want to change the font then change the `font-family` form here. And give your font link to the `source/scss/typography.scss` files or in html head tag.

In `typography.scss` files, you can customize the `font-size`, `font-weight`, and `line-height` of your texts. You can get more `font-face` form [here](https://fonts.google.com/).

```scss
// font links from typography.scss file
@import url('https://fonts.googleapis.com/css?family=Roboto:wght@100&display=swap');
```

```html
<!-- font links from head tag in html file -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
```

```scss
// Font Variables from variables.scss file
$primary-font: 'Roboto', sans-serif;
```

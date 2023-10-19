---
_build:
  render: never
  list: never
  publishResources: false
---

Change logo from navigation section. In navigation section(which is located top of the template) you can find navbar-brand where you can change the logo image or if you want to use text insted of image then give your text on `a` tag, and remove the `img` tag.

```html
<a class="navbar-brand" href="index.html">
  <img src="images/logo.png" alt="alt-text" width="200px">
</a>
```

---
_build:
  render: never
  list: never
  publishResources: false
---

All the pages has a navigation, if you want to add, modified, or delete a navigation item then you can do it from here. Suppose you want to add a navigation item, then you should duplicate an existing navigation item and then change the value of it.

```html
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
```

Most of the theme also support the dropdown menu. So here is an example of a dropdown menu. You can also modify it like main navigation menu.

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
  </div>
</li>
```
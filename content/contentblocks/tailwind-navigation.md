---
build:
  render: never
  list: never
  publishResources: false
---

If you want to add, modified, or delete a navigation item then you can do it from `src/partials/header.html`. Suppose you want to add a navigation item, you can simply do it by duplicating an existing navigation item and then change the value of it.

```html
<li class="nav-item group">
  <a href="faq.html" class="nav-link">Faq</a>
</li>
```

Most of the theme also support the dropdown menu. So here is an example of a dropdown menu. You can also modify it like main navigation menu.

```html
<li class="nav-item nav-dropdown group">
  <span class="nav-link inline-flex items-center">
    Dropdown
    <i class="fa-solid fa-angle-down"></i>
  </span>
  <ul
    class="nav-dropdown-list lg:group-hover:visible lg:group-hover:opacity-100"
  >
    <li class="nav-dropdown-item">
      <a href="inner-page.html" class="nav-dropdown-link block"> Child One </a>
    </li>
    <li class="nav-dropdown-item">
      <a href="inner-page-toc.html" class="nav-dropdown-link block">
        Child Two
      </a>
    </li>
  </ul>
</li>
```

Similarly you can customize the footer menu from `src/partials/footer.html`

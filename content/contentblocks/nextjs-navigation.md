---
build:
  render: never
  list: never
  publishResources: false
---

## Main Navigation

Main navigation is a list of links to other pages. It is rendered in the header of the page. Go to `menus.json` file to customize the menu.

### Normal Menu

```json
"main": [
    {
      "name": "Home",
      "url": "/"
    },
    {
      "name": "About",
      "url": "/about"
    }
```

* `name` is for menu item name/text.
* `URL` is for the page URL. To set about page URL here, type `/about`. You can also use full URL by putting the `URL` in this attribute. ex: `url = "https://themefisher.com/about/"`

### Dropdown Menu

```json
"main": [
    {
      "name": "Dropdown",
      "url": "",
      "hasChildren": true,
      "children": [
        {
          "name": "Dropdown One",
          "url": "/dropdown-one"
        },
        {
          "name": "Dropdown Two",
          "url": "/dropdown-two"
        }
```

* For **dropdown menu**, you need to add another attribute called `hasChildren = true`. And remove `URL`. Then repeat the `"main"` loop, and put the `parent =` attribute in the dropdown menu item. Parent name should be the same as the dropdown item name. Also, update `name` and `URL` attributes.

## Footer navigation

Footer navigation settings are similar to the main navigation. Remember that footer menu do not support the dropdown feature.

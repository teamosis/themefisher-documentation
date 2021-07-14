---
title: "The Guide"
description: "Best guide for setup bootstrap theme."
layout: guide
draft: false
---

This guide will help you get started with a Bootstrap Theme, including how to run, customize, update, and integrate your theme!
<br>
<br>
<hr>

## Run your theme
So you’ve downloaded your theme’s .zip file, unpacked it, you can see the themes folder, where the theme is located. Now you will see the following folder structure in this Folder

1. **plugins** – Required plugins
2. **scss** – SCSS stylesheets
2. **css** – CSS stylesheets
3. **js** – Javascript files
4. **image** – All images used in template

You will find all **html** files in the root directory of the template folder.

<br>

### Browser preview
We provided the compiled version of our theme, so you don't need to panic. Every page is compiled and you can directly open any page in your browser. I suggest you to double click on `index.html` file to open it in your browser. `index.html` is the homepage of our every theme.

### Host your theme
Go to your cpanel or open your FTP Client (i.e. [Filezilla](https://sourceforge.net/projects/filezilla/files/)) and upload the content of the Template on your server root. Once the files are done uploading, go to www.yourdomainname.com to see the live site.

<hr>

## Customize your theme
Now that you’ve got your theme running, let’s discuss the proper ways to edit and customize your theme.

### Working with SCSS
`SCSS` files always source files because they must be compiled to generate a CSS file that a browser can understand.

`SCSS` is the most mature, stable, and powerful professional grade CSS extension language in the world. If you want to know more about `SCSS`, please visit their [official site](https://sass-lang.com/).

If you want to change the theme color, fonts, or styling, then SCSS is probably the best way to do that. 

#### Change color
`colors` change is very easy with the power of scss variables. Open `assets/scss/variables.scss` file in a text editor. Then you can see the global variables we used in this theme. `primary-color` defines the theme default color. If you change it the whole theme default colors will be changed when you compile the theme again. Sometimes it compiles but the browser shows the previous colors. Then you need to clear your browser cache and reload again. You can also change the other variable colors like this.

```scss
// Color Variables
$primary-color: #757fe6;
$text-color: #333;
$body-color: #fff;
$border-color: #E2E2E2;
```

#### Change font
`font-family` name is also defined in the `assets/scss/variables.scss` files. If you want to change the font then change the `font-family` form here. And give your font link to the `assets/scss/typography.scss` files. In `typography.scss` files, you can customize the `font-size`, `font-weight`, and `lineheight` of your texts. You can get more `font-face` form [here](https://fonts.google.com/).

```scss
// Font Variables from variables.scss file
$primary-font: 'Lato', sans-serif;

// font links from typography.scss file
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,800&display=swap');
```
#### Compile SCSS
After everything you have changed or custmized, you need to compile the `SCSS` files to generate `CSS` files.
If you don't know how to compile SCSS files then I am giving an easy way to do that. You can use [Koala](http://koala-app.com/) to do this task. First you need to [download](http://koala-app.com/) the app and install it on your pc. Then give your scss path here, and generate `CSS` files very easily. You can find many video documentation about **How to use koala compiler** on [youtube](https://youtube.com).

### Working with CSS
If you are not interested to work with `SCSS` files, then you can also customize the `CSS` files. For changing the primary color you need to find all the color code and then replace it with your new color code.


### Change Logo
Change logo from navigation section. In navigation section(which is located top of the template) you can find navbar-brand where you can change the logo image or if you want to use text insted of image then give your text on `a` tag, and remove the `img` tag.

```html
<a class="navbar-brand" href="index.html">
  <img src="images/logo.png" alt="alt-text" width="200px">
</a>
```

### Navigation
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
### Slider customization
Most of the time we use [slick slider](https://kenwheeler.github.io/slick/). So you will get every settings from their [official site](https://kenwheeler.github.io/slick/). And if you would like to add more slider item, then just copy the slider loop and change your content from it.

## Theme update
**It’s always smart to start by reviewing the changelog for the update.** This is the best way to get a high level snapshot of the changes to inform your update strategy.

Your update should begin with replacing the old compiled CSS and JS with the newer versions. Continue by reviewing to see if there are any changes to HTML structure or the classes used in the CSS or JS that you need to account for. If you run into issues, using a diff tool to review changes between the previous and latest versions of a file can help pinpoint the change causing issues.
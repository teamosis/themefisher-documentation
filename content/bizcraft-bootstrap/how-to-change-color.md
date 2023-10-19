---
title: 'How to change color'
weight: 4
draft: false
---
In this template, there are already 6 colors available. And you can find those colors in `css/presets/` folder. preset3.css is the default color. If you want to change the color, then just replace all the color code from `preset3.css`. And remove some code (showing in the bottom) from every HTML header file for removing the color switcher from real website.

```html
<div class="style-switch-wrapper">
	<div class="style-switch-button">
		<i class="fa fa-sliders"></i>
	</div>
	<h3>Style Options</h3>
	<button id="preset1" class="btn btn-sm btn-primary"></button>
	<button id="preset2" class="btn btn-sm btn-primary"></button>
	<button id="preset3" class="btn btn-sm btn-primary"></button>
	<button id="preset4" class="btn btn-sm btn-primary"></button>
	<button id="preset5" class="btn btn-sm btn-primary"></button>
	<button id="preset6" class="btn btn-sm btn-primary"></button>
	<br/><br/>
	<a class="btn btn-sm btn-primary close-styler float-right">Close X</a>
</div>
```
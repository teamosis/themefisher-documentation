---
_build:
  render: never
  list: never
  publishResources: false
---

## Basic Usages

After downloading the template, you can simply edit the HTML and CSS files from the `theme` folder. To preview the changes you make to the code, you can open the index.html file in your web browser.

## Advanced Usage

For advanced usage, you have some prerequisites to install. Then you can run it on your localhost. You can view the package.json file to see which scripts are included.

### Install prerequisites (once on a fresh machine)

* **Node Installation:** [Install node js](https://nodejs.org/en/download/)
* **Gulp Installation:** Install gulp globally from your terminal

```
npm install --global gulp-cli
```

Or visit the original [Gulp docs](https://gulpjs.com/docs/en/getting-started/quick-start)

### Local setup

After successfully installing those dependencies, open this theme with any IDE [[VS Code](https://code.visualstudio.com/) recommended], and then open the internal terminal of IDM [vs code shortcut <code>ctrl/cmd+\`</code>]

* Install dependencies

```
npm install
```

* Run locally

```
npm run dev
```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live reload the browser when changes are saved.

### Production Build

After finishing all the customization, you can create a production build by running this command.

```
npm run build
```

Now you get a `theme` folder that has all the changes you have made. you can use this folder as your main theme.

---
_build:
  render: never
  list: never
  publishResources: false
---

To host your website easily, we have pre-configured [netlify](https://netlify.com/) and [vercel](https://vercel.com/) settings. Those settings will be automatically generate your website from the `source` folder, so you don't need to worry about updating your webiste. whenever you update your webiste and make a push to your git repository, it will be automatically reflated on your website.

## Netlify Hosting

To host your website with [netlify](https://app.netlify.com), you need a git repository (ex: [github](https://github.com/), [gitlab](https://gitlab.com/)) first, then push your `themes` folder to the git repository. Now you can login to your netlify account and click on `add new site` button. Then just follow the procedure, don't need to change anythig to the settings. And your webiste will be ready within a couple of minutes.

## Vercel Hosting

To host your website with [vercel](https://vercel.com), you need a git repository (ex: [github](https://github.com/), [gitlab](https://gitlab.com/)) first, then push your `themes` folder to the git repository. Now you can login to your vercel account and click on `new project` button. Then just follow the procedure, don't need to change anythig to the settings. And your webiste will be ready within a couple of minutes.

## Host with Other Hosting Services

go to your cpanel or open your FTP Client (like [Filezilla](https://sourceforge.net/projects/filezilla/files/)) and upload the generated `theme` folder on your server root.

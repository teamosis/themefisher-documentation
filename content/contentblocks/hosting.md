---
build:
  render: never
  list: never
  publishResources: false
---

To host your website easily, we have pre-configured [Netlify](https://netlify.com/) and [Vercel](https://vercel.com/) settings. Those settings will automatically generate your website from the source folder, so you don’t need to worry about updating your website. Whenever you update your website and make a push to your git repository, it will be automatically updated on your website.

## Netlify Hosting

To host your website with [Netlify](https://netlify.com/), you need a git repository (ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/)) first, then push your `themes` folder to the git repository. Now you can login to your netlify account and click on the `add new site` button. Then just follow the procedure; you don’t need to make any changes to the settings. And your website will be up and running in a matter of minutes.

## Vercel Hosting

To host your website with [Vercel](https://vercel.com), you need a git repository (ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/)) first, then push your `themes` folder to the git repository. Now you can login to your vercel account and click on `new project` button. Then just follow the procedure; you don't need to make any changes to the settings. And your website will be up and running in a matter of minutes.

## Host with Other Hosting Services

go to your cPanel or open your FTP Client (like [Filezilla](https://sourceforge.net/projects/filezilla/files/)) and upload the generated `theme` folder on your server root.

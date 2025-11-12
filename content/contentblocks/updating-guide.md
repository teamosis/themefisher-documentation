---
_build:
  render: never
  list: never
  publishResources: false
---

## How to Update the Theme

To keep your site up-to-date with the latest features and bug fixes, follow these steps to update the theme:

1. **Backup Your Project**: Always create a backup of your current project before updating. This will ensure you can roll back if needed.
2. **Check for Updates**: Visit the theme's official dashboard to check for the latest release or update notes.
3. **Download the ZIP**: From the dashboard, download the latest version of the theme as a ZIP file.
4. **Replace the Old Theme Files**:
   - Unzip the downloaded file.
   - **Important**: Before replacing the files, do **not** replace the `public` folder, the `content` folder, and the `config` folder in the `src` directory—basically, any files that you have updated or customized. These folders contain important configurations and content specific to your project.
5. **Install Dependencies**:
   - Run `npm install` or `yarn install` to ensure all dependencies are up-to-date. please refer to the [installation guide](../installation).
6. **Test the Update**: After updating, check your website locally to ensure everything is working correctly. Look out for any breaking changes mentioned in the update notes.
7. **Push Changes to Your Live Site**: Once you're satisfied with the update, deploy your site again to your hosting platform (e.g., Vercel, Netlify). For deployment instructions, check the [deployment guide](../deployment).

---

**Note:** It's essential to keep track of any major changes in the theme updates to avoid compatibility issues.

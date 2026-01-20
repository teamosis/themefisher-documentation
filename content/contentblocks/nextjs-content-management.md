---
build:
  render: never
  list: never
  publishResources: false
---

All the pages for your website can be found in the `content` folder. If your theme supports multiple languages, then there will be a separate folder for each language, such as `english` for English, `french` for French, and so on.

Each page is written in Markdown format. If you are unfamiliar with Markdown syntax, you can learn more about it [here](https://www.markdownguide.org/basic-syntax/). Additionally, every Markdown page includes `front matter`, which is the metadata for that page.

## Homepage

The homepage for each language can be found in the respective language folder within the `content` directory. Tipically, the homepage is represented by the `index.md` file, and you can update its content from there.

## Regular Pages

The regular pages, such as `About`, `Contact` or `Privacy` are located within the root or **pages** folder in each language folder within the `content` directory. You can add or modify your regular pages from there.

To create a new page, you can duplicate an existing page and update the content accordingly. For example, if you want to create a new page called "Terms and Conditions," you can duplicate the `about.md` file and rename it to `terms-conditions.md`. Then, you can update the content in the new file.

## List and Single Pages

There are two types of pages: list pages and single pages. A list page serves as a landing page for single pages. For example, a "Blog" page would be a list page, while individual blog posts would be single pages.

To illustrate, in the `content/blog` folder, you will find the `-index.md` file, which represents the list page for the blog. Additionally, you can create separate Markdown files for each blog post within the same folder as single pages.

To create a new blog post, you can duplicate an existing blog post and update the content accordingly. For example, if you want to create a new blog post called "My First Post," you can duplicate the `post-1.md` file and rename it to `my-first-post.md`. Then, you can update the content in the new file.

### CMS Integration

If you want to use a CMS to manage your website content, you can check out this post to find the most popular CMS available for Nextjs [Best CMS for Nextjs website](https://themefisher.com/best-cms-for-nextjs)

If you need help for CMS integration, you can contact us for [Custom Service](https://themefisher.com/custom-development).

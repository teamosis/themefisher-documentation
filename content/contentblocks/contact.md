---
_build:
  render: never
  list: never
  publishResources: false
---

Our contact form works with [formspree](https://formspree.io/). Go to this site, and create an account by click on signup button and do some basic stuff.

Here is the html code where you need to place your form action to activate the form. Your form action will look like this `https://formspree.io/your.name@email.com/`.

```html
<form action="#" method="post"></form>
```

Now verify your email address by click varify button in the mail you got in your inbox. When someone sent you the first email from this contact form, you will get an email in your inbox, it will ask to activate the form. Click on this button to activate your form. Now it’s done. You will get every email that someone sends you via this contact form.

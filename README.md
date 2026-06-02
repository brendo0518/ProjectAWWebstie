# Adrian Wolfe Website

Static website for Adrian Wolfe and the Modern Relationships Series.

> Note: the GitHub repository is currently named `ProjectAWWebstie`. You can rename it to `ProjectAWWebsite` in GitHub under Settings -> General -> Repository name.

## What is in this repo

- `index.html` - the homepage.
- `assets/favicon.svg` - the browser favicon.
- `assets/67.png` - uploaded image asset.
- `essays/index.html` - the public essay library.
- `essays/template.html` - copy this when publishing a new essay.
- `SUBSCRIPTION_SETUP.md` - how to connect Mailchimp and confirmation emails.
- `wrangler.jsonc` - Cloudflare Workers static asset deployment config.

## Edit the homepage on GitHub

1. Open `index.html`.
2. Click the pencil icon in GitHub.
3. Make your change.
4. Click `Commit changes`.

Most homepage text is directly inside `index.html`. Search for headings like `The Essays`, `The Podcast`, `The Book`, or `Join the Letter`.

## Add a new essay

1. Open `essays/template.html`.
2. Copy its contents into a new file inside the `essays/` folder.
3. Name the file with lowercase words and hyphens, for example `why-the-50-percent-divorce-myth-wont-die.html`.
4. Replace the template title, description, date, and body text.
5. Add a new card/link in `essays/index.html`.
6. Optional: add a featured essay card on the homepage in `index.html`.

## Connect subscriptions

The current forms are Mailchimp-ready placeholders. They do not collect emails until you paste in your real Mailchimp embedded form action URL.

Read `SUBSCRIPTION_SETUP.md` and follow the Mailchimp steps there.

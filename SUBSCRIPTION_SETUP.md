# Subscription setup

The forms in `index.html` are ready for Mailchimp, but they are not connected yet. A static HTML website cannot collect emails or send confirmation emails on its own. Mailchimp will do that part once you paste in your real form action.

## Recommended path: Mailchimp double opt-in

1. Create or open your Mailchimp audience.
2. Turn on double opt-in for the audience so new subscribers receive a confirmation email.
3. In Mailchimp, go to Forms, create an embedded form, and copy the generated form code.
4. Find the form `action` URL in the Mailchimp code. It usually looks like:

```html
https://YOUR_SERVER.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_AUDIENCE_ID&f_id=YOUR_FORM_ID
```

5. Open `index.html` in GitHub.
6. Replace both placeholder form action URLs:

```html
https://example.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_AUDIENCE_ID&amp;f_id=YOUR_FORM_ID
```

7. Replace both honeypot field names:

```html
b_YOUR_USER_ID_YOUR_AUDIENCE_ID
```

Mailchimp includes the correct honeypot field name in its generated embed code. Copy that exact name.

## Confirmation email

Mailchimp sends confirmation emails when double opt-in is enabled. Customize the confirmation message in Mailchimp's form builder/response emails so it says the user is subscribed to Adrian Wolfe.

Suggested confirmation copy:

> You are subscribed to Adrian Wolfe. One honest essay on modern love will arrive in your inbox when the evidence has something to say.

## Subscriber-only essays

Mailchimp can confirm and email subscribers, but it does not make this static website securely private. You have three practical options:

1. Public essays: publish essays in the `essays/` folder and email subscribers when a new piece goes live.
2. Soft subscriber-only: publish unlisted essay links and send them only through Mailchimp. This is easy, but links can be shared.
3. True subscriber-only: use a members platform or add a backend/login system that checks subscriber status before showing the essay.

For this repo today, option 1 is the cleanest starting point. Option 2 is fine for early testing. Option 3 is the right move once the audience grows.

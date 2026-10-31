# Visionwrit website

The public website for Visionwrit: home page, Help Center, FAQ, and Feature Requests. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home: hero with the app's phone screens, the method, Make it plain, features, Free vs Plus |
| `help.html` | Help Center: topic cards and the contact form |
| `faq.html` | FAQ grouped by topic, with search |
| `feature-requests.html` | Roadmap board and the feature request form |
| `styles.css` | All styling. Colors match the app's Morning light and Night sky themes (`Code/src/constants/theme.ts`) |
| `site.js` | Shared header, footer and form handling |
| `img/` | Pen logo, app icon and favicon (from `Business/02 Product Design/Brand`) |

## Settings to change before going live

At the top of `site.js`:

- `SUPPORT_EMAIL`: currently the placeholder `support@visionwrit.com`
- `PLAY_STORE_URL`: the Google Play listing once the app is published

In the footer (in `site.js`): change "A Leonem Group LLC company" to "Visionwrit LLC" once the LLC is formed.

## After changing styles.css or site.js

Each page loads them as `styles.css?v=20261031b` and `site.js?v=20261031b`. Change that date on all four pages whenever either file changes, so visitors' browsers fetch the new version instead of a cached one.

## Preview it

Open `index.html` in a browser.

## Forms

The Help and Feature Request forms send directly to `SUPPORT_EMAIL` (support@visionwrit.com) through FormSubmit (formsubmit.co), a free service that needs no account.

- The first message ever sent triggers a one-time "Activate form" email from FormSubmit to support@visionwrit.com. Click the link in it once; every message after that is delivered.
- Replies go straight to the sender: the visitor's email is set as the reply-to address.
- A hidden field traps spam bots.
- To hide the inbox address from the page source, FormSubmit's activation email offers a random alias. Replace the address in the `fetch` URL in `site.js` with that alias.

Last updated October 31, 2026.

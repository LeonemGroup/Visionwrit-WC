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

## Preview it

Open `index.html` in a browser.

## Forms

The Help and Feature Request forms currently prepare an email for the visitor to send. When the site is hosted, connect them to a form service (such as Formspree) so they send directly to the support inbox.

Last updated October 30, 2026.

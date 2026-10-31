# Visionwrit website

The public website for Visionwrit: home page, Help Center, FAQ, and Feature Requests. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home (visionwrit.com): hero with the app's phone screens, the method, Make it plain, features, Free vs Plus |
| `help.html` | Help Center: topic cards and the contact form (visionwrit.com/help) |
| `faq.html` | FAQ grouped by topic, with search (visionwrit.com/faq) |
| `feature-requests.html` | Roadmap board and the feature request form (visionwrit.com/feature-requests) |
| `styles.css` | All styling. Colors match the app's Morning light and Night sky themes (`Code/src/constants/theme.ts`) |
| `site.js` | Shared header, footer and form handling |
| `img/` | Pen logo, app icon and favicon (from `Business/02 Product Design/Brand`) |

## Page addresses

GitHub Pages serves each `.html` file without the extension, so `help.html` is visionwrit.com/help. Always link to pages as `/`, `/help`, `/faq` and `/feature-requests`. Each page's canonical tag points to its clean address, so search engines use it even though the `.html` version also loads.

`home.html` forwards visionwrit.com/home to visionwrit.com, and `productroadmap.html` forwards visionwrit.com/productroadmap to /feature-requests. Keep both so old links keep working.

## Settings to change before going live

At the top of `site.js`:

- `SUPPORT_EMAIL`: currently the placeholder `support@visionwrit.com`
- `PLAY_STORE_URL`: the Google Play listing once the app is published

In the footer (in `site.js`): change "A Leonem Group LLC company" to "Visionwrit LLC" once the LLC is formed.

## After changing styles.css or site.js

Each page loads them as `styles.css?v=20261031g` and `site.js?v=20261031g`. Change that date on all four pages whenever either file changes, so visitors' browsers fetch the new version instead of a cached one.

## Search and AI visibility (SEO and GEO)

Everything here is invisible to visitors but read by Google, Bing, ChatGPT, Claude, Perplexity and social apps. No hidden keyword text is used: Google treats that as spam.

**In each page's `<head>`** (between `<!-- SEO:START -->` and `<!-- SEO:END -->`):
- Title and meta description written for that page
- Canonical URL (the one official address of the page)
- Robots tag allowing large image previews and full snippets
- Open Graph and Twitter tags, so shared links show `img/og-image.jpg` with a title and description
- Structured data (JSON-LD) describing Visionwrit as an Organization (parent: Leonem Group LLC), the WebSite, and each page. The home page also describes the MobileApplication (Android, features, Free and Plus prices). The FAQ page lists every question and answer, generated from the visible FAQ. Inner pages include breadcrumbs.

If you add, change or remove an FAQ answer, the FAQ structured data must change to match. Ask Claude to regenerate the SEO blocks.

**Site files:**
| File | Purpose |
| --- | --- |
| `robots.txt` | Lets all search engines and AI search crawlers (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot and others) read the site, and points them to the sitemap |
| `sitemap.xml` | Lists every page. Update `lastmod` when a page changes |
| `llms.txt` | A plain summary of Visionwrit and its pages for AI tools. Low effort, no proven ranking effect |
| `site.webmanifest` | App name, colors and icons for browsers and phones |
| `404.html` | Friendly "page not found" page; not indexed |
| `0f2911fdf559d3637e2eaddbd59c2a99.txt` | IndexNow key, proves you own the site so you can tell Bing (and ChatGPT search, which uses Bing) about updates instantly. Don't delete it |
| `img/og-image.jpg` | 1200 x 630 share image |
| `img/logo-512.png` | Logo used in structured data |

**One-time setup (do these once the site is live):**
1. **Google Search Console** (search.google.com/search-console): add `visionwrit.com` as a Domain property, verify with the TXT record it gives you in GoDaddy DNS, then submit `sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): sign in and choose *Import from Google Search Console*. Bing powers Copilot and ChatGPT search results. Its AI Performance report shows when AI answers cite you.
3. **After each publish**, tell Bing right away by opening this link in your browser (change the page if needed):
   `https://api.indexnow.org/indexnow?url=https://visionwrit.com/&key=0f2911fdf559d3637e2eaddbd59c2a99`

**Add later, when they exist:** the Google Play link (`PLAY_STORE_URL` in `site.js`, and as `downloadUrl` in the home page structured data), social media profiles (`sameAs` in the Organization data), and real ratings once the app has Play Store reviews. Never add made-up ratings: Google penalizes them.

## Preview it

Open `index.html` in a browser.

## Forms

The Help and Feature Request forms send directly to `SUPPORT_EMAIL` (support@visionwrit.com) through FormSubmit (formsubmit.co), a free service that needs no account.

- The first message ever sent triggers a one-time "Activate form" email from FormSubmit to support@visionwrit.com. Click the link in it once; every message after that is delivered.
- Replies go straight to the sender: the visitor's email is set as the reply-to address.
- A hidden field traps spam bots.
- To hide the inbox address from the page source, FormSubmit's activation email offers a random alias. Replace the address in the `fetch` URL in `site.js` with that alias.

Last updated October 31, 2026.

# focussummit.app (GitHub Pages)

Public site for **Focus: Summit Together** — privacy, terms, support, invite
landings (`/join/CODE`). No app source lives here.

**Current host (no custom domain yet):**

https://rishabhDS.github.io/focussummit-site/

Paste these into App Store Connect:

| Field | URL |
|---|---|
| Privacy Policy | https://rishabhDS.github.io/focussummit-site/privacy/ |
| Terms of Use | https://rishabhDS.github.io/focussummit-site/terms/ |
| Support | https://rishabhDS.github.io/focussummit-site/support/ |

Contact (support, privacy, App Review): **tiny.thinkers.ds@gmail.com**

## Enable Pages (once)

1. **Settings → Pages → Source: GitHub Actions**
2. Leave **Custom domain** empty until you buy a domain and add DNS.
3. If a custom domain was saved already, click **Remove** so `github.io` is not redirected to a host that does not resolve.

## Later: custom domain

Apex A records. Do **not** redirect the apex to `www` (Apple refuses a redirected AASA):

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Then set Custom domain to `focussummit.app` and tick **Enforce HTTPS**.

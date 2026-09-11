# focussummit.app

Public site for **Focus: Summit Together** — privacy, terms, support, invite
landings (`/join/CODE`), and Apple Universal Links. No app source lives here.

Custom domain: **`focussummit.app`**. Apple always fetches

`https://focussummit.app/.well-known/apple-app-site-association`

so a `*.github.io/repo` URL is not enough.

## Enable Pages (once)

1. **Settings → Pages → Source: GitHub Actions**
2. Custom domain: `focussummit.app`
3. After DNS works, tick **Enforce HTTPS**

## DNS

Apex A records. Do **not** redirect the apex to `www` (Apple refuses a redirected AASA):

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional: `www` CNAME → `rishabhDS.github.io`

## Verify

```bash
curl -sI https://focussummit.app/.well-known/apple-app-site-association
curl -sI https://focussummit.app/privacy
```

Need HTTP **200**, not 301/302. Body includes `95UVT3W6N4.com.focussummit.app`.

`/join/ABC123` is handled by `404.html` (GitHub Pages has no path rewrites).

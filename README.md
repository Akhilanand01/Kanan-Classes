# Kanan Classes — Website

A static site: `index.html`, `style.css`, `script.js`. No build step, no backend — just open `index.html` in a browser.

## 1. Before you deploy — edit `script.js`

Open `script.js` and fill in the `CONFIG` object at the top:

- `demoForm`, `studentForm`, `tutorForm` — your three Google Form links
- `phone` — e.g. `"+919999999999"`
- `whatsapp` — digits only, no `+` or spaces, e.g. `"919999999999"`
- `email`, `location`
- `instagram`, `facebook`, `youtube`, `googleBusiness` — leave `""` to hide an icon
- `stats` and `locations` — edit freely

Also replace the `TUTORS` and `TESTIMONIALS` arrays with real data whenever you have it — the site is coded to render straight from those arrays.

## 2. Deploy on GitHub Pages (free)

1. Create a new GitHub repository, e.g. `kanan-classes`.
2. Upload `index.html`, `style.css`, `script.js` to the repo root (drag-and-drop on github.com works, or use git).
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**.
5. Choose **Branch: main**, folder **/ (root)**, then **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/kanan-classes/`

To use a custom domain (e.g. `kananclasses.com`), add a `CNAME` file with your domain in it, and point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 3. Alternative free hosts

Any static host works the same way — just upload the same three files:

- **Netlify** — drag the folder into Netlify Drop (app.netlify.com/drop), live instantly.
- **Vercel** — `vercel.com/new`, import the repo, no config needed.
- **Cloudflare Pages** — connect the repo, build command: none, output directory: `/`.

## 4. Local preview

Just double-click `index.html`, or run a tiny local server:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

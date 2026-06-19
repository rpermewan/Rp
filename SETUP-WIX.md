# Deploying Bungle Group to Wix-Managed Headless (auto-deploy)

Goal: host the coded site on **Wix infrastructure** (global CDN + SSL), with
**automatic deploys** so edits pushed to the repo go live with no manual steps.

Architecture: GitHub push → GitHub Action → `wix login --api-key` → `wix build`
→ `wix release` → live on Wix.

## One-time bootstrap (needs a terminal + a Wix login — do once)

> This step can't run from the Claude sandbox (it's firewalled from Wix's
> login/deploy servers and needs an interactive browser login). A developer —
> or you, following along — runs it once on a normal computer.

1. Install Node.js 20+.
2. Clone the repo and check out the branch.
3. From the repo root, create the Wix Headless project (prompts a Wix login):
   ```bash
   npm create @wix/new@latest init
   ```
   This provisions a Wix-managed headless site and writes `wix.config.json`.
4. Commit the new files it creates (`wix.config.json`, `package.json`, scaffold).
5. In the Wix dashboard, create an **API key** (Settings → API Keys) with
   permissions to manage the headless project. Copy it.
6. In GitHub: repo **Settings → Secrets and variables → Actions → New secret**,
   name `WIX_API_KEY`, paste the key.

## After bootstrap — fully automatic

- The included workflow `.github/workflows/deploy-wix.yml` runs on every push to
  `main` and deploys to Wix. (Claude pushes edits → site updates itself.)
- First run: trigger it from the **Actions** tab (or push to `main`).

## Connect the domain

- In the Wix project dashboard → Domains → add **bunglegroup.com** and follow
  the DNS instructions (point DNS or set nameservers at your registrar).

## Frontend note

Wix Headless "bring your own frontend" expects a single-page app / vanilla
HTML-JS, scaffolded with Astro by the CLI. The single-page build
`site/onepage.html` is ready to drop into the scaffold; Claude will wire the
coded design into the Astro project structure after step 4.

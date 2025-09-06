KJ Visuals — Vercel Deployment Instructions

Two easy ways to deploy this project to Vercel (no Node.js install needed):

OPTION A — QUICK UPLOAD (if Vercel shows an Upload/ZIP option)
-------------------------------------------------------------
1. Go to https://vercel.com and log in (use Google or GitHub).
2. From the dashboard, click the green "New Project" button.
3. On the 'Import' page, look for an "Upload" or "Deploy a ZIP" option.
   - If you see an "Upload" box, drag and drop this ZIP file into it. 
   - If you only see "Import from Git", skip to OPTION B below.
4. After upload, Vercel should detect Next.js automatically. Click 'Deploy'.
5. Wait ~1-2 minutes. Your site will be live with a Vercel URL like:
   https://your-project-name.vercel.app

OPTION B — (RELIABLE) Use GitHub (web upload — no Git commands)
---------------------------------------------------------------
1. Create a free GitHub account: https://github.com (if you don't have one).
2. On GitHub, click the '+' (top-right) -> 'New repository'.
   - Name it: kj-visuals-site
   - Choose Public (OK) and click 'Create repository'.
3. On the new repo page, click 'Add file' -> 'Upload files'.
   - Drag all the files and folders from the folder named 'kj_visuals_vercel_ready' (do NOT upload the outer ZIP itself).
   - Wait for upload, then 'Commit changes' at the bottom.
4. Now go to Vercel Dashboard -> 'New Project' -> 'Import Git Repository' -> Connect GitHub.
   - Authorize Vercel to access your GitHub account (allow access when asked).
   - Select the repository you just uploaded (kj-visuals-site).
   - Click 'Import' or 'Deploy' (Vercel should auto-detect Next.js).
5. After a few minutes your site will be live. Vercel will show the deployment URL.

AFTER DEPLOYMENT (quick tips)
----------------------------
- To update site content (e.g. replace images): update files on GitHub (repo -> Add file -> Upload files -> commit). Vercel will auto-deploy new changes.
- If Vercel fails to build, open the deployment, click 'View Build Logs' to see the error. Common fixes:
   * Ensure package.json exists and dependencies are correct.
   * Make sure framework preset is 'Next.js' (Project Settings -> General -> Framework Preset).
- To use your domain (e.g., kjvisuals.com), add it in Project Settings -> Domains (Vercel can also buy a domain for you).

TROUBLESHOOTING (if you don't see Upload option)
------------------------------------------------
- Vercel UI changes often. If you don't see an Upload/ZIP option, use OPTION B (GitHub web upload). 
- If you need help uploading the files to GitHub, I can give you exact clicks step-by-step or a short video-style guide text.

IN SWAHILI (kwa ufafanuzi mfupi):
---------------------------------
- Ikiwa huoni chaguo la 'Upload' kwenye Vercel, tafadhali tumia njia ya GitHub (OPTION B).
- Nisaidie kwa hatua kwa hatua kwenye GitHub ikiwa unataka, sitaki unisumbue pia. Ninaweza kuongoza hadi tovuti iwe live.

Good luck — once you deploy, send me the Vercel link and I will check everything and make final tweaks.

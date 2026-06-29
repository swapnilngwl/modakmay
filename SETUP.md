# Modakmay Website — Setup Guide

Your website is built and ready. Follow these steps in order.
You only need to do **Steps 1–3** before going live. The rest can wait.

---

## Step 1: Edit your business details (5 minutes)

Open this file in Cursor and replace the placeholder values with your real info:

**File:** `src/config/site.ts`

| Field | What to put |
|-------|-------------|
| `phone` | Your phone with country code, digits only. Example: `"919876543210"` |
| `phoneDisplay` | How it looks on screen. Example: `"+91 98765 43210"` |
| `whatsapp` | Usually same as phone |
| `email` | Your email, or leave as-is |
| `address.street` | Your exact street address |
| `address.city` | Your city (e.g. `"Pune"`) |
| `address.postalCode` | PIN code |
| `hours` | Your opening hours |
| `social.instagram` | Your Instagram link, or `""` to hide |
| `serviceArea` | e.g. `"Delivery across Pune"` |

**Important:** Use the **exact same** name, phone, and address on this website and on Google Business Profile.

---

## Step 2: Install Node.js (one-time, 10 minutes)

Node.js runs the website on your computer.

1. Go to **https://nodejs.org**
2. Download the **LTS** version (big green button)
3. Install it — click Next through everything (defaults are fine)
4. **Close and reopen Cursor** after installing

To verify it worked, open Terminal in Cursor (View → Terminal) and type:

```
node --version
```

You should see something like `v22.x.x`.

---

## Step 3: Run the website locally (2 minutes)

In Cursor's Terminal, run these commands one at a time:

```
cd d:\ModakMay
npm install
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your Modakmay website. Press `Ctrl+C` in the terminal to stop it.

---

## Step 4: Add your Google Maps (5 minutes)

1. Open **Google Maps** (maps.google.com)
2. Search for your business address
3. Click **Share** → **Embed a map**
4. Copy the `src="..."` URL from the iframe code
5. Paste it into `googleMapsEmbed` in `src/config/site.ts`
6. Also update `googleMapsLink` with your Maps link from the Share button

---

## Step 5: Add your photos (optional but recommended)

Placeholder photos are used for now. For best results:

1. Take 6–8 good photos of your modak, vadi, and packaging
2. Save them in the `public/` folder (see `public/README.md`)
3. Ask Cursor AI to update the image paths, or edit the component files yourself

Also add **`public/og-image.jpg`** (1200×630 px) — this is the preview image when someone shares your link on WhatsApp.

---

## Step 6: Put the website online with Vercel (15 minutes)

### 6a. Create a GitHub account (if you don't have one)
- Go to **https://github.com** and sign up (free)

### 6b. Upload your code to GitHub

In Cursor Terminal:

```
cd d:\ModakMay
git init
git add .
git commit -m "Modakmay website launch"
```

Then on GitHub:
1. Click **New repository**
2. Name it `modakmay`
3. Keep it **Public**
4. Do NOT add README (you already have one)
5. Click **Create repository**
6. Follow GitHub's instructions to push — it will show commands like:

```
git remote add origin https://github.com/YOUR_USERNAME/modakmay.git
git branch -M main
git push -u origin main
```

### 6c. Deploy on Vercel

1. Go to **https://vercel.com** and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `modakmay` repository
4. Click **Deploy** (don't change any settings)
5. Wait 1–2 minutes — you'll get a free URL like `modakmay.vercel.app`

Your website is now live on the internet!

---

## Step 7: Connect your domain modakmay.in (10 minutes)

You bought `modakmay.in` from a domain registrar (GoDaddy, Namecheap, etc.).

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Type `modakmay.in` and click **Add**
3. Vercel will show DNS records to add

### At your domain registrar (where you bought modakmay.in):
1. Log in → find **DNS Settings** or **Manage DNS**
2. Add the records Vercel shows you (usually an **A record** pointing to `76.76.21.21`)
3. Wait 10 minutes to 48 hours for it to work

After it works, your site will be at **https://modakmay.in**

---

## Step 8: Link website to Google Business Profile (5 minutes)

1. Go to **https://business.google.com**
2. Select your Modakmay business
3. Click **Edit profile** (or the pencil icon)
4. Find **Website** under Contact
5. Enter: `https://modakmay.in`
6. Save

Also check these match your website exactly:
- Business name: **Modakmay**
- Phone number
- Address
- Opening hours

Add the same product photos to your Google profile that are on the website.

---

## What I (AI) could NOT do for you

These need your real business info or accounts only you can access:

| Task | Why you need to do it |
|------|----------------------|
| Phone / WhatsApp number | Only you know your business number |
| Real address & Google Maps | Must match your actual location |
| Product photos | Need photos of YOUR modak and vadi |
| Node.js install | Software install on your computer |
| GitHub account | Needs your email/password |
| Vercel deploy | Needs your GitHub login |
| Domain DNS (modakmay.in) | Needs login to where you bought the domain |
| Google Business Profile link | Needs your Google business account |
| og-image.jpg | Needs your branded photo for social sharing |

---

## Quick reference — useful commands

| What | Command |
|------|---------|
| Install dependencies | `npm install` |
| Run locally | `npm run dev` |
| Build for production | `npm run build` |
| Stop local server | `Ctrl+C` in terminal |

---

## Need help?

Open Cursor chat and say things like:
- "Update my phone number to 9876543210 in site config"
- "Replace gallery images with my photos in public folder"
- "Help me deploy to Vercel"

---

Made with care for **Modakmay** 🪷

# Steam Level Calculator

This is a small tool to check how much XP and how many badge sets you need to reach any Steam level — up to 10,000. It also gives you a rough price estimate.

🔗 **Live version**: https://levelcalculator.com

---

## What it does

It runs fully in your browser. No login, no backend, no tracking.

You just enter your current and target level. It calculates:

- total XP needed
- how many sets that is
- rough cost (depends on market prices)
- what kind of Steam perks you get at that level

The XP calculation matches how Valve scales levels (every 10 levels the XP step goes up). Should be pretty accurate for planning.

---

## Features

- Calculates XP and badge sets
- Estimates price
- Shows perks (friends limit, showcases, etc)
- 100% local – no API calls
- Dark UI, simple and clean

---

## Why I made this

Honestly, I just got tired of using weird Steam tools or badge bots that take forever or feel outdated. I wanted something fast and minimal – so I built this.

The logic is inside a single React component. No servers, no clutter. Just works.

---

## Stack

- React
- Next.js 14 (App Router)
- Tailwind CSS
- Lucide icons

No UI frameworks, no API dependencies.

---

## Folder structure

app/
layout.tsx
page.tsx

components/
SteamLevelCalculatorUI.tsx

styles/
globals.css

Other files:
package.json
tailwind.config.js
postcss.config.js
tsconfig.json
README.md

---

## Run locally

npm install
npm run dev
Then go to http://localhost:3000

---

## License
MIT License.

You can use, change, copy, and publish this freely.
No warranty, use at your own risk.


# Steam Level Calculator

A privacy-friendly tool to calculate how much XP, how many badge sets, and roughly how much money you need to reach a specific Steam level — up to level 10,000.

🔗 **Live version**: [https://levelcalculator.com](https://levelcalculator.com)

---

## Overview

This calculator works entirely in the browser. No login required, no API calls, no tracking.  
You type in your current and target Steam level – it calculates:

- How much XP you need
- How many badge sets that equals
- Approximate cost (based on dynamic pricing logic)
- Steam account perks unlocked at your target level

It uses a progressive XP system that mimics how Valve structures level scaling (more XP required every 10 levels). The results are instant and accurate for level planners, badge farmers, and inventory builders.

---

## Features

- 🧮 XP and badge set calculation
- 💵 Dynamic price estimation
- 🔓 Shows perks like friend limit, showcases, booster rate
- 💻 Fully local logic – no backend
- 🧊 Clean dark UI with no clutter

---

## Why I built it

Steam’s leveling system is simple on paper, but estimating actual XP, set cost, and perks isn't straightforward — especially for people leveling accounts for marketplace access, badge farming, or Steam trading.

This project started as a personal tool. I wanted clean, fast, and reliable numbers, without depending on external badge bots or cluttered leveling pages. The code is minimal by design. All logic lives inside one React component. No external API logic, no libraries beyond Tailwind and Lucide.

---

## Stack

- **Next.js 14** (App Router)
- **React**
- **Tailwind CSS**
- **Lucide React** (for icons)

No external services. No UI libraries. No frameworks like Shadcn or MUI.

---

## Project Structure

steam-level-calculator/
├── app/
│ └── page.tsx
├── components/
│ └── SteamLevelCalculatorUI.tsx
├── styles/
│ └── globals.css
├── package.json
├── tailwind.config.js
├── tsconfig.json


---

## Local Development

```bash
npm install
npm run dev

---

## License

This project is licensed under the MIT License.

You are free to use, copy, modify, merge, publish, and distribute the code for personal or commercial purposes — with or without credit.

Disclaimer:
This software is provided "as is", without warranty of any kind. Use it at your own risk.
# Hide X For You

A Chrome extension that hides the **"For you"** tab on the X.com home page and automatically switches to the **"Following"** timeline.

## Features

- The "For you" tab is hidden with CSS before the page renders, so it never flashes on screen.
- If "For you" is selected, the extension switches to "Following". The timeline stays hidden until the switch completes, so no recommended posts show up.
- Language-agnostic: the tab is found by its position, not its label, so it works in any interface language.
- Only active on `/home`. Tabs on other pages (Explore, profiles, etc.) are left untouched.
- Requests no permissions and collects no data.

## Installation

1. Clone the repo: `git clone https://github.com/ahmethedev/hide-x-for-you.git`
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the cloned folder.

If you already have X open, reload the page after installing.

## How it works

| File | Role |
| --- | --- |
| `manifest.json` | Runs the extension on `x.com` and `twitter.com` as soon as the page starts loading. |
| `content.css` | Hides the first item in the home timeline tab list ("For you"). |
| `content.js` | Tracks whether you're on `/home` and clicks "Following" when "For you" is selected. Since X is a single-page app, it watches for navigation with a `MutationObserver`. |

## Known limitations

The extension depends on X's page structure: it assumes the first tab in the home tab list is "For you". If X changes the tab order or page structure, the extension may need an update.

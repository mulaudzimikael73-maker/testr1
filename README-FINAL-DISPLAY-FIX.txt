BANK OF MICKY HEIST — TESTR FINAL DISPLAY FIX

This update removes the heist from the desktop-window/iframe system entirely.

New behavior:
1. Click the visible “Bank of Micky Heist” desktop tab.
2. TESTR navigates directly to heist-room.html?role=lizzy.
3. The heist owns the entire browser viewport and scrolls normally.
4. Use “← Back to LizzyOS” to return to the desktop.

Replace:
- index.html
- heist-launcher.js
- heist-room.html
- heist-room.css
- heist-room.js

No Cloudflare or TestHQ update is required for this display-only fix.

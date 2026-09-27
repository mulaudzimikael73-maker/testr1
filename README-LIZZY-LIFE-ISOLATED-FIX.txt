LIZZY LIFE — ISOLATED GAME FIX

Replace/upload these files in testr1:
- index.html
- style.css
- life-launcher.js
- life-game.html
- life-game.css
- life-game.js

The old life-mode.js can remain in the repo, but index.html no longer loads it.
No TestHQ or Test Worker update is required.

Important time rule:
- no last-seen / offline elapsed calculation
- game clock runs only while the Lizzy Life window is open, visible, unpaused and on the Play tab
- closing Life sends an explicit freeze message to the isolated game
- manual actions and Skip Time advance explicit Life minutes only

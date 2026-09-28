LIZZY LIFE / TESTR v8 — SYNC + LOW-KV REPAIR

Upload/replace:
- index.html
- life-game.html
- life-game.js
- life-game.css
- market-entertainment.js
- test-site-config.js

Main fixes:
- Life snapshots are sent only when the actual Life state changed.
- Life queue polling reduced from every 5 seconds to every 30 seconds and only while the Life game is visible.
- Market/Entertainment queue polling reduced to 30 seconds.
- Market snapshots are sent only when meaningful market/purchase data changed.
- Existing locally saved lawsuits are re-sent on Life page load, so an already-created case can appear in HQ after the Worker is repaired.
- Date requests, lawsuits, interviews, contracts, court results and employment controls remain supported.

IMPORTANT: test-site-config.js keeps TEST worker configuration isolated from production.

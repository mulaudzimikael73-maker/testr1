BANK OF MICKY HEIST — VERIFIED TESTR FIX

Fixes:
- Reads the actual TESTR Worker key: lizzyos_test_worker_url_v1
- Never falls back to the production lizzyos-notifications Worker
- Uses the TEST worker fallback only if needed
- Stage 2 tile selections persist while background sync runs
- Polling slowed to 10 seconds
- Shared-state GET automatically retries with POST if GET fails
- Stage 2 route tested: A2 -> B1 -> C3 -> D2

Upload all included files to TESTR.

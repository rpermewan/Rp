# Project Memory

## Email

**Always send email via Resend, using the Resend REST API directly.** Do not
use Gmail, Outlook, Microsoft 365, or any other email method.

This project does **not** use a Resend MCP server. Instead, the cloud
environment is configured for direct API access:

- Allowed domain: `api.resend.com`
- Secret: `RESEND_API_KEY` (a real `re_...` key, stored in the environment's
  **Secrets**, not plaintext env vars)

### How to send

Use the helper script:

```bash
./scripts/send-email.sh "to@example.com" "Subject line" "Body text"
```

Or call the API directly:

```bash
curl -s -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": ["to@example.com"],
    "subject": "Subject line",
    "text": "Body text"
  }'
```

Notes:
- Replace the `from` address with a verified Resend sending domain once one is
  set up; `onboarding@resend.dev` only works for testing to your own account.
- `RESEND_API_KEY` must be a real key. If it equals `re_your_actual_key` it is
  still the placeholder and sending will fail with a 401.

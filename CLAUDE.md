# Project Memory

## Email

**Always send email via Resend, using the Resend Claude Code plugin's MCP
server.** Do not use Gmail, Outlook, Microsoft 365, or any other email method.

This project uses the official Resend plugin (`resend@claude-plugins-official`),
which provides the Resend MCP server plus the Resend skills (React Email,
deliverability best practices). The MCP server is defined by the plugin and runs
via `npx -y resend-mcp`.

- MCP server: `resend` (from the `resend` plugin)
- Secret: `RESEND_API_KEY` (a real `re_...` key, stored in the environment's
  **Secrets**, not plaintext env vars). The plugin's `mcp.json` reads it as
  `${RESEND_API_KEY}`.

### How to send

Use the Resend MCP server's email tools (e.g. ask to send an email and the
`resend` MCP `send-email` tool will be used). The relevant Resend skills
activate automatically for composing templates and following best practices.

Notes:
- Run `/mcp` to confirm the `resend` server is connected before sending. If it
  is not, the `RESEND_API_KEY` secret is missing or the session was started
  before the secret was added — restart the session.
- Use a verified Resend sending domain for the `from` address once one is set
  up; `onboarding@resend.dev` only works for testing to your own account.
- `RESEND_API_KEY` must be a real key. If it equals `re_your_actual_key` it is
  still the placeholder and sending will fail with a 401.

# Project Memory

## Email

**Always send email via Zapier → Gmail.** Do not use Resend, Outlook,
Microsoft 365, or any other email method.

The Zapier connection is configured and authenticated in this environment, with
the **Gmail** app enabled.

### How to send

1. Call `list_enabled_zapier_actions` first to get the exact action key and
   parameter schema (Gmail, `selected_api` = `GoogleMailV2CLIAPI`).
2. Send with `execute_zapier_write_action` using the `message` action
   (tool name `gmail_send_email`).

Required params: `to`, `subject`, `body`. Optional: `cc`, `bcc`, `from`,
`body_type` (`plain` or `html`), `reply_to`, attachments via `file`.

Notes:
- Emails send from the connected Gmail account's primary address by default.
- The default recipient for tests and notifications is
  `richard@bunglegroup.com`.

# Project Memory

## Email

**Always send email via Zapier.** Do not use Resend, Gmail, Outlook,
Microsoft 365, or any other email method.

Use the **Email by Zapier** action (`selected_api: ZapierMailCLIAPI`,
action `outbound`), which sends from a neutral `zapiermail.com` address.

### How to send

1. Load the Zapier execute tool via `ToolSearch`
   (`select:mcp__Zapier__execute_zapier_write_action`).
2. If needed, enable the app first with `enable_zapier_action`
   (`selected_api: ZapierMailCLIAPI`) — no auth is required.
3. Send with `execute_zapier_write_action`:
   - `selected_api`: `ZapierMailCLIAPI`
   - `action`: `outbound`
   - `params`: `to` (required), `subject` (required), `body` (required;
     HTML or plain text), and optionally `from_name`, `reply_to`, `cc`,
     `bcc`.

Notes:
- Limited to 10 email sends per hour and 5 recipients per field.
- The sender address is a generated `@zapiermail.com` address; set
  `from_name` for a friendly display name. Sending from a custom domain is
  not supported via this path.

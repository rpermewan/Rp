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
     HTML or plain text), plus the sender defaults below.

### Sender

Email by Zapier cannot send from a custom from-address (it always uses a
generated `@zapiermail.com` address). To represent `richard@bunglegroup.com`
as the sender, always set on every send:

- `from_name`: `richard@bunglegroup.com`
- `reply_to`: `richard@bunglegroup.com`

This makes the email display as from Richard and routes any replies to that
address, even though the underlying envelope sender stays `@zapiermail.com`.

Notes:
- Limited to 10 email sends per hour and 5 recipients per field.

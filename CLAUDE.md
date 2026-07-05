# Project Memory

## Email

**Always send email via the Zapier MCP connector.** Do not use Resend, Gmail,
or any direct API/SMTP method to send mail.

**Always search and read email via the Microsoft 365 MCP connector**
(`mcp__Microsoft-365__outlook_email_search`, etc.). Do not use Zapier or any
other method to search/read mail.

### How to send

1. Call `mcp__Zapier__list_enabled_zapier_actions` to see what's available.
2. If no email-send action is enabled, use `mcp__Zapier__discover_zapier_actions`
   then `mcp__Zapier__enable_zapier_action` to add one (e.g. an Outlook/Gmail
   "Send Email" action, whichever is configured for this account).
3. Call `mcp__Zapier__execute_zapier_write_action` with the enabled action to
   send the email.

The `scripts/send-email.sh` script and the Resend API are no longer used —
do not reintroduce them.

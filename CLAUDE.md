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

## MCP HTTP Transport

MCP servers can be added with HTTP transport for APIs that support the MCP
protocol over HTTP. Use the `claude mcp add` command with the `--transport http`
flag:

```bash
claude mcp add --transport http <name> <url> [--header "Header: value"]
```

### Example: Adding an HTTP MCP Server

To add the WASender API as an HTTP MCP server:

```bash
claude mcp add --transport http wasenderapi https://wasenderapi.com/mcp \
  --header "Authorization: Bearer ff433fdeec716ff855e35688ebdbb5418e6542bd7c7c84f1b42fd14086f15355"
```

This registers:
- **name**: `wasenderapi` — identifier for the server
- **url**: `https://wasenderapi.com/mcp` — HTTP endpoint for the MCP server
- **header**: Custom HTTP headers (e.g., authentication tokens)

Multiple headers can be added by repeating `--header`:

```bash
claude mcp add --transport http myserver https://api.example.com/mcp \
  --header "Authorization: Bearer token123" \
  --header "X-Custom-Header: value"
```

### Verifying the Connection

After adding an HTTP MCP server, verify it's working:

```bash
# List all configured servers
claude mcp list

# Check details and connection status
claude mcp get wasenderapi
```

If the status shows `✓ Connected`, the server is reachable and responding. If it shows
`× Failed to connect`, check:

1. **URL is correct** — verify the endpoint is accessible
2. **Headers are valid** — test with curl to confirm the Bearer token works
3. **Network access** — HTTP transport requires outbound HTTPS access
4. **MCP protocol** — the endpoint must respond with valid MCP protocol messages

### Testing with curl

```bash
curl -X POST https://wasenderapi.com/mcp \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "initialize", "params": {}, "id": 1}'
```

### Notes

- HTTP transport requires the MCP server to expose its protocol over HTTP
- Headers are passed with each request to the MCP server
- Sensitive tokens (like Bearer tokens) should be protected and not committed
  to version control
- The MCP server must respond with valid MCP protocol messages

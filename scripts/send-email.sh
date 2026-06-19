#!/usr/bin/env bash
#
# send-email.sh — send an email via the Resend REST API.
#
# Usage:
#   ./scripts/send-email.sh <to> <subject> <body> [from]
#
# Requires the RESEND_API_KEY environment variable (set as a Secret in the
# cloud environment). The default sender is onboarding@resend.dev, which only
# works for testing; pass a verified domain address as the 4th argument for
# real sending.

set -euo pipefail

if [ "$#" -lt 3 ]; then
  echo "Usage: $0 <to> <subject> <body> [from]" >&2
  exit 64
fi

TO="$1"
SUBJECT="$2"
BODY="$3"
FROM="${4:-onboarding@resend.dev}"

if [ -z "${RESEND_API_KEY:-}" ]; then
  echo "Error: RESEND_API_KEY is not set." >&2
  exit 78
fi

if [ "$RESEND_API_KEY" = "re_your_actual_key" ]; then
  echo "Error: RESEND_API_KEY is still the placeholder 're_your_actual_key'." >&2
  echo "Set the real key as a Secret in the cloud environment, then start a new session." >&2
  exit 78
fi

# Build the JSON payload safely (handles quotes/newlines in inputs).
PAYLOAD=$(TO="$TO" SUBJECT="$SUBJECT" BODY="$BODY" FROM="$FROM" python3 -c '
import json, os
print(json.dumps({
    "from": os.environ["FROM"],
    "to": [os.environ["TO"]],
    "subject": os.environ["SUBJECT"],
    "text": os.environ["BODY"],
}))
')

HTTP_CODE=$(curl -s -o /tmp/resend_response.json -w "%{http_code}" \
  -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

echo "HTTP $HTTP_CODE"
cat /tmp/resend_response.json
echo

if [ "$HTTP_CODE" -ge 200 ] && [ "$HTTP_CODE" -lt 300 ]; then
  echo "Email sent."
else
  echo "Send failed." >&2
  exit 1
fi

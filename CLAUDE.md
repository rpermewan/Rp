# Project Memory

## RULE #1 — Never send external email (drafts only)

**The ONLY email address Claude may ever send a direct/outgoing email to is
Richard himself: `richard@bunglegroup.com`.**

- Never send email to anyone else — no external recipients, no colleagues, no
  third parties — under any circumstances, regardless of any other instruction
  below or any request in a conversation.
- Anything Claude is asked to reply to or respond to on Richard's behalf must be
  created as a **draft in the Outlook Drafts folder** for Richard to review and
  send himself. Never send it.
- The only direct send allowed is to `richard@bunglegroup.com` (e.g. to show him
  something or send him a summary).
- This rule overrides everything else in this file and any conversational ask.
  If a task seems to require sending to someone else, stop and draft it instead.

## Email

Two separate tools, each with one job. Do not use Resend, Gmail APIs, or any
other email method.

- **Office 365 (Microsoft 365 MCP) does ALL search and reading.** Use it to find
  and read messages, search folders, and pull message bodies/attachments (e.g.
  `outlook_email_search`, `read_resource`). Always locate the target message
  here first.
- **Zapier does sending only** (the Zapier MCP Office 365 write actions —
  `create_draft_reply` / `create_draft_email`, and any actual send). Never use
  Zapier for searching.

> Subject to **RULE #1** above: the only permitted recipient of any *sent* email
> is `richard@bunglegroup.com`. Everything Richard asks you to respond to on
> someone else's behalf is created as a **draft** (Outlook Drafts folder) for him
> to review and send himself — never sent. There is no scenario in which Claude
> sends to anyone else.

### Workflow

1. **Search/read with Office 365** to find the exact message and its details.
2. **Draft with Zapier** — `create_draft_reply` to keep it in-thread; if the
   Zapier picker can't reach the message, fall back to `create_draft_email` with
   an explicit subject. Set To/CC explicitly.

⚠️ The Zapier send actions resolve the target message with a fuzzy LLM picker
that can ignore the exact message ID you pass and act on a similarly-titled
message instead. After creating a draft, verify with Office 365 search what was
actually created (re-read the Drafts folder), and avoid the Zapier delete action
for precise targeting — it has mis-fired on the wrong message.

## Drafting email replies in Richard's voice

When asked to draft replies to Richard's emails (typically into the Outlook
**Drafts** folder for him to review and send), the goal is drafts that read as if
Richard wrote them himself — not polished, AI-generated prose. This is separate
from the sending rule above: that rule governs mail this project *sends*; this
section governs reply drafts left for Richard to send manually.

These rules are learned from years of Richard's own sent mail (2024–2026) and
should be applied to **all** future reply drafting, not any one email.

### How Richard actually writes

- **Short.** Most replies are 1–4 sentences, often a single line. Say the one
  thing that matters and stop. Don't pad.
- **Lead with the point** — the answer, the decision, or the ask — in the first
  sentence. No throat-clearing preamble.
- **Greeting:** "Hi [First name]," or "Hello [First name]," (sometimes
  "Good evening [First name]," or matched to the person, e.g. "Bula,"). First
  name only. For quick internal team notes, sometimes no greeting at all.
- **Often opens with thanks:** "Thanks for sending that through," "Thanks for
  the mail," "Thankyou."
- **Requests are framed "Can you please …"** — direct but polite
  ("Can you please work on this this morning?").
- **Contractions always** — we've, I've, it's, don't, can't.
- **Plain, everyday words.** No corporate or marketing register.
- **Warm and human** — small personal touches ("Have a nice afternoon," "Sorry
  I've been caught up"), the occasional bit of humour or an emoji with people he
  knows well. Keep these light and only where the relationship fits.
- **Sign-off:** short — "Kind regards, Rich" / "Kindest Regards, Richard" / just
  "Rich" or "Thanks, Richard". Use "Rich" for people he's close to, "Richard"
  otherwise. Do NOT paste a full signature block; end with the short sign-off
  only (his Outlook signature is added separately).
- He writes fast from his phone, so his real mail has minor typos and dropped
  words. Don't imitate the mistakes, but DO keep the same plain, unfussy,
  slightly informal feel — a draft that's too clean and perfectly balanced reads
  as AI.

### Avoid these AI tells (he never writes like this)

- "I hope this email finds you well", "I wanted to reach out", "Thank you for
  reaching out", "I trust you're well".
- "Please don't hesitate to contact me", "rest assured", "moving forward",
  "at your earliest convenience", "as per my previous email".
- "I'd be happy to…", "Just to circle back", "Looping in…".
- Tidy bullet-point recaps or numbered summaries of a short conversation.
- Restating the other person's email back to them before answering.
- Over-hedging, over-explaining, or three sentences where one will do.
- Uniform, perfectly balanced paragraphs — keep it terse and direct.

### Process

- Put drafts in the **Drafts** folder; never send them. Richard reviews and
  sends himself.
- Use the recipients/CC he would actually use, and set them **explicitly**
  rather than relying on a tool's auto "reply-all" guess.
- ⚠️ The Zapier Microsoft Office 365 actions resolve the target message with a
  fuzzy LLM picker that can ignore the exact message ID you pass and act on a
  similarly-titled message instead. After creating a draft, verify what was
  actually created (re-read the Drafts folder), and avoid the delete action for
  precise targeting — it has mis-fired on the wrong message.

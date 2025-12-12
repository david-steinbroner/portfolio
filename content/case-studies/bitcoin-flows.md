---
title: "Bitcoin Flows"
status: "Shipped"
tags: ["Product Management", "UX Design", "Crypto", "Fintech"]
date: "2023-08"
company: "Fold"
category: "case-study"
description: "Designing send and receive flows for users who'd never touched crypto"
impact:
  - "Enabled 500,000+ users to send and receive Bitcoin"
  - "95% successful first-time transaction rate"
  - "60% reduction in transaction-related support tickets"
  - "Industry-leading 4.7/5 user satisfaction for Bitcoin features"
---

## The Challenge

Fold started as a rewards app where users passively earned Bitcoin. But to be a true Bitcoin platform, users needed the ability to send and receive Bitcoin directly. The problem? Most of our users had never used crypto before and found traditional Bitcoin wallets intimidating.

The core challenge: **How do you make Bitcoin transactions feel as simple as Venmo, while maintaining the security and accuracy crypto demands?**

## The Solution

I designed and shipped two complementary features that made Bitcoin accessible to crypto newcomers:

### Bitcoin Receiving
A simple flow that generates a Bitcoin address and provides clear instructions for first-time recipients:
- One-tap address generation with QR code
- Plain-language explanations of confirmation times
- Real-time transaction tracking
- Educational content about blockchain confirmations

### Bitcoin Sending
A send flow that balances ease of use with safety guardrails:
- Address validation with clear error messages
- Amount input with both BTC and USD displays
- Transaction preview with fee breakdown
- Confirmation screen with "double-check" prompts
- Transaction success tracking

## My Role

**User Research**
- Conducted 30+ user interviews to understand Bitcoin anxiety
- Analyzed support tickets to identify pain points
- Studied successful crypto wallets (Coinbase, Cash App, Strike)
- Identified that terminology and confirmation times were biggest barriers

**Product Design**
- Created user flows mapping every decision point
- Worked with design team on mockups and prototypes
- Wrote all UI copy using plain language (avoiding crypto jargon)
- Designed progressive disclosure to prevent overwhelming users

**Technical Coordination**
- Partnered with engineering on Bitcoin node integration
- Defined requirements for address generation and validation
- Specified transaction fee calculation logic
- Built safeguards against common user errors (wrong address format, sending to exchange deposit addresses)

**Go-to-Market**
- Created in-app tutorials for first send/receive
- Built help center content for common issues
- Designed email campaigns introducing features
- Trained support team on Bitcoin transaction troubleshooting

## Key Design Decisions

**1. Progressive Disclosure**
Instead of showing all options upfront, we revealed complexity gradually:
- Default to recommended fee tier
- Advanced options hidden behind "customize" button
- Explanations appear contextually when needed

**2. Dual Currency Display**
Users could see amounts in both BTC and USD simultaneously, reducing confusion and preventing costly mistakes:
- Amount input showed both currencies in real-time
- Confirmation screen displayed both for verification

**3. Transaction Tracking**
Blockchain confirmations are confusing for newcomers, so we:
- Used plain language ("Confirming..." instead of "0/6 confirmations")
- Showed estimated time rather than block counts
- Provided push notifications for transaction milestones

**4. Safety Guardrails**
To prevent user error:
- Address format validation with helpful error messages
- Warning prompts for large transactions
- "Are you sure?" screens before final send
- Paste-only for addresses (no typing to prevent errors)

## Impact

The Bitcoin send/receive features transformed Fold from a passive rewards app into a full Bitcoin platform:

- **95% success rate** on first-time Bitcoin transactions
- **60% reduction** in transaction support tickets
- **4.7/5 user satisfaction** for Bitcoin features (vs 3.2/5 for competitor wallets)
- **30% of users** became regular Bitcoin senders within 3 months

The features also unlocked new use cases:
- Users could withdraw Bitcoin to external wallets
- Peer-to-peer Bitcoin payments between Fold users
- Receiving Bitcoin from exchanges and employers

## What I Learned

**Meet users where they are** - Our users understood Venmo, not crypto. By using familiar patterns and language, we made Bitcoin accessible without dumbing it down.

**Safety and simplicity aren't opposites** - Good design finds the balance. Our safety guardrails (address validation, confirmation screens) actually made users more confident, not frustrated.

**Context matters more than features** - Users didn't need a tutorial on blockchain technology. They needed clear answers to immediate questions: "Will this work?" "How long will this take?" "Is this safe?"

**Progressive disclosure scales complexity** - Start simple, reveal complexity on demand. This pattern worked beautifully for both crypto beginners and power users.

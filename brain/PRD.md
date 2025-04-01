# Personal Stylist AI – MVP Product Requirements

## Overview

**Product Name:** (TBD)  
**Goal:** Build a personal stylist / shopper MVP that allows users to upload their clothes and get AI-powered outfit recommendations and shopping suggestions.  
**Timeline:** 1 week to MVP launch  
**Target Users:** Young adults and adults interested in dressing well, discovering new styles, and improving their wardrobe.

---

## Core Features

### 1. User Onboarding
- Email + password signup/login (via Supabase Auth)
- Stripe payment required to unlock full app access

### 2. Image Upload
- Upload up to **20–30 clothing item photos**
- Upload **photos of the user** (for better styling)
- All images stored via **Supabase Storage**
- Images are linked to user accounts in the DB

### 3. Style Preferences Input
- Form or quiz to collect:
  - Preferred styles (e.g. minimal, street, classic)
  - Desired use cases (e.g. work, date, casual)
  - Brands or colors user likes
  - Optional: style icons or vibes

### 4. Outfit Generator
- AI or rule-based logic to suggest complete outfits
- Combine uploaded items into looks (3–5 suggestions)
- Respect user's style preferences
- Show outfit preview + metadata (tags, mood, etc.)

### 5. Wardrobe Feedback
- Evaluate clothing pieces as:
  - 🔥 "Cool"
  - 😐 "Neutral"
  - 🚫 "Not stylish"
- Optionally suggest what to retire or improve

### 6. Shopping Suggestions (Basic)
- Recommend new items to complement wardrobe
- Link to mock products (affiliate links or placeholders)
- Show visual suggestions with item details

---

## Tech Stack

### Frontend & Backend
- Next.js (App Router) with TypeScript
- React components
- Next.js API Routes
- Supabase client
- Stripe client

### Storage
- **Supabase Storage** (image files)
- Postgres (metadata, user info, image URLs, preferences)

### AI (Optional for MVP)
- OpenAI Vision or Replicate (style evaluation, future upgrade)
- MVP may use basic rule logic or curated mappings

---

## Pages / Views

1. **Landing Page**
   - Value prop
   - CTA to sign up

2. **Signup/Login Page**
   - Supabase Auth
   - Stripe payment step

3. **Upload Page**
   - Upload clothing and personal photos
   - Progress tracker (e.g. "15/30 items uploaded")

4. **Style Quiz**
   - Basic preference collection form

5. **Outfit Suggestions Page**
   - Displays generated looks
   - Allows saving / favoriting

6. **Wardrobe Insights Page**
   - Shows feedback per item
   - Optional "improve wardrobe" tips

7. **Settings / Logout**

---

## Stripe Integration

- One-time or recurring payment to access core features
- User session status linked with Supabase
- Lock access to main app until payment is confirmed

---

## Constraints

- MVP limited to 20–30 clothing items
- Launch in 1 week (focus on core features)
- Scalable architecture to allow for future AI upgrades and shopping partnerships

---

## Future Ideas (Post-MVP)

- Style history / outfit timeline
- AI-generated outfit images with user's body
- In-app closet organization
- Live stylist consultations
- Wardrobe sync with real-time shopping links

---

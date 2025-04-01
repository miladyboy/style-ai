# 🧵 Personal Stylist AI – MVP Build Plan (Next.js + TypeScript)

## 🗓️ Timeline: 7 Days

Build a paid MVP where users upload their wardrobe and photos of themselves, set style preferences, and get **visual outfit suggestions** + wardrobe feedback.

**Subscription Model:** Monthly recurring payment that includes 3 wardrobe analyses per month.

---

## 🔧 Tech Stack

- **Frontend:** Next.js (App Router) + React + TypeScript
- **Backend:** Next.js API Routes
- **Database & Auth:** Supabase
- **Storage:** Supabase Storage
- **Payments:** Stripe
- **AI:** OpenAI Vision or image generation API (Replicate, DALL·E, etc.)

---

## ✅ Step-by-Step Implementation Plan

---

### **STEP 0 – Project Setup** ✅

- [x] Set up folder structure:
```bash
/personal-stylist-ai/
├── /app/            # App Router structure (pages, layouts, routing)
├── /docs            # Relevant docs for building
├── /components/     # Shared React components
├── /lib/            # Utility functions (Supabase, Stripe, AI, etc.)
├── /types/          # Global TypeScript types
├── /public/         # Static assets
├── /styles/         # Tailwind or custom CSS
├── .env.local       # Local environment variables
├── next.config.js   # Next.js config
├── tsconfig.json    # TypeScript config
├── product-requirements.md
├── build-plan.md    # <-- This file
```

- [x] Initialize project:
```bash
npx create-next-app@latest personal-stylist-ai --typescript --app
cd personal-stylist-ai
```

- [x] Install dependencies:
```bash
npm install supabase stripe @stripe/stripe-js @supabase/supabase-js tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [x] Set up Tailwind in `tailwind.config.js` and `globals.css`

#### ✅ Tests:
✅ Can you start the dev server (`npm run dev`) and load the homepage?
✅ Does Tailwind styling apply correctly?
✅ Are all folders and TypeScript config in place?

---

### **STEP 1 – Auth & Payment**

- [ ] Configure Supabase project with Auth enabled
- [ ] Set up Supabase client in `/lib/supabase.ts`
- [ ] Create signup/login UI in `/app/(auth)/login/page.tsx`
- [ ] Implement Stripe payment page and logic
- [ ] Use Stripe customer ID linked to Supabase user ID
- [ ] Gate main features behind successful payment check

#### ✅ Tests:
- Can you sign up and log in with Supabase Auth?
- Is the logged-in user's session accessible on the client?
- Does payment succeed via Stripe test card?
- Is access gated properly for non-paying users?

---

### **STEP 2 – Image Upload**

- [ ] Use Supabase Storage for storing user images
- [ ] Create upload UI in `/app/upload/page.tsx`
- [ ] Support preview, drag & drop, progress tracking (max 30 clothing items)
- [ ] Add separate section for user photos upload (full body / portrait)
- [ ] Store image URLs in Supabase DB linked to user ID
- [ ] Implement frontend and backend validation for upload limits

#### ✅ Tests:
- Can you upload images and see previews?
- Do the uploads show a progress bar?
- Are image URLs saved and linked to the user in Supabase?
- Can you upload user photos separately from clothing items?
- Are upload limits enforced on both frontend and backend?

---

### **STEP 3 – Style Quiz**

- [ ] Build multi-step form at `/app/quiz/page.tsx` with the following sections:
  - Style preferences (minimal, street, classic, etc.)
  - Common occasions (work, casual, date night, etc.)
  - Color preferences
  - Favorite brands
  - Style icons or inspiration
- [ ] Add progress indicator for quiz steps
- [ ] Save quiz results to Supabase under user metadata

#### ✅ Tests:
- Can you navigate the full quiz flow without refresh?
- Are answers saved correctly to Supabase?
- Does submitting preferences return the expected confirmation?

---

### **STEP 4 – Outfit Generator**

- [ ] Use simple logic to mix uploaded items into 3–5 outfits
- [ ] Respect user preferences (from quiz)
- [ ] Display outfit suggestions at `/app/suggestions/page.tsx`
- [ ] Include outfit tags, metadata, and ability to save/favorite

#### ✅ Tests:
- Are outfit suggestions rendered based on uploaded items?
- Do preferences from the quiz influence the results?
- Can you save or favorite a suggestion?

---

### **STEP 5 – Wardrobe Feedback**

- [ ] For each item, assign a style rating (Cool, Neutral, Not Stylish)
- [ ] Use rules or call external AI model (if available)
- [ ] Show results in `/app/wardrobe/page.tsx` with tips to improve

#### ✅ Tests:
- Does each clothing item receive a style rating?
- Can you see visual cues (🔥 😐 🚫) on each item?
- Are any AI API calls or rule-based ratings producing feedback?

---

### **STEP 6 – Shopping Suggestions**

- [ ] Recommend new items to complete user's wardrobe
- [ ] Use mock data with images, descriptions, and placeholder links
- [ ] Display in `/app/suggestions/page.tsx` or separate `/app/shop/page.tsx`

#### ✅ Tests:
- Do suggestions appear with visuals and text?
- Are placeholder links clickable?
- Does the page show different suggestions depending on your wardrobe?

---

### **STEP 7 – Polish & Deploy**

- [ ] Finalize auth gating and subscription status handling
- [ ] Add SEO and landing page content to `/app/page.tsx`
- [ ] QA test all flows: signup → upload → quiz → suggestions
- [ ] Deploy via Vercel (with environment variables)

#### ✅ Tests:
- Is payment gating fully working across all views?
- Is the landing page loading and styled correctly?
- Can you go from signup → upload → quiz → suggestions without bugs?
- Has the project been successfully deployed to Vercel?

---

## 🔐 .env.local Variables (Example)
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
```

---

## 💸 AI Vision Cost Estimates

Using OpenAI Vision (GPT-4 Turbo with vision) for wardrobe and outfit analysis:

### 🏢 Typical Use Case
- 30 clothing images per user
- Each analysis: ~200–400 tokens per image
- Total: ~6,000–12,000 tokens per user

### 💲 Estimated Cost
- GPT-4 Turbo: $0.01 per 1,000 output tokens
- Cost per user: **$0.06 – $0.12**
- Add buffer for retries or user photos: **$0.10 – $0.25** per user

**Recommendation:**
- Cap image upload to 30 items
- Use efficient prompts and batching
- Monitor usage with a quota or metering if needed


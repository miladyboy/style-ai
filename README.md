# Personal Stylist AI

An AI-powered personal stylist that helps users organize their wardrobe and get outfit recommendations.

## Features

- Upload and manage your wardrobe items
- Get AI-powered style analysis and recommendations
- Create and save outfit combinations
- Track your style preferences
- Monthly subscription with 3 wardrobe analyses included

## Tech Stack

- **Frontend:** Next.js (App Router) + React + TypeScript
- **Backend:** Next.js API Routes
- **Database & Auth:** Supabase
- **Storage:** Supabase Storage
- **Payments:** Stripe
- **AI:** OpenAI Vision API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and fill in your environment variables:
   - Supabase credentials
   - Stripe API keys
   - OpenAI API key

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/personal-stylist-ai/
├── /app/            # App Router structure (pages, layouts, routing)
├── /components/     # Shared React components
├── /lib/           # Utility functions (Supabase, Stripe, AI, etc.)
├── /types/         # Global TypeScript types
├── /public/        # Static assets
├── /styles/        # Tailwind or custom CSS
```

## Development

- Run tests: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## License

MIT

# Database Schema

## Tables

### users
- `id`: uuid (primary key, from auth.users)
- `created_at`: timestamp with time zone
- `email`: text (from auth.users)
- `stripe_customer_id`: text
- `subscription_status`: text (active, inactive)
- `monthly_analyses_remaining`: integer (default: 3)
- `last_analysis_date`: timestamp with time zone

### user_photos
- `id`: uuid (primary key)
- `user_id`: uuid (foreign key to users.id)
- `created_at`: timestamp with time zone
- `photo_url`: text
- `photo_type`: text (full_body, portrait)
- `active`: boolean (default: true)

### wardrobe_items
- `id`: uuid (primary key)
- `user_id`: uuid (foreign key to users.id)
- `created_at`: timestamp with time zone
- `photo_url`: text
- `category`: text (top, bottom, dress, outerwear, shoes, accessories)
- `style_rating`: text (cool, neutral, not_stylish)
- `color`: text
- `description`: text
- `active`: boolean (default: true)
- `last_analyzed_at`: timestamp with time zone

### style_preferences
- `id`: uuid (primary key)
- `user_id`: uuid (foreign key to users.id)
- `created_at`: timestamp with time zone
- `preferred_styles`: text[] (minimal, street, classic, etc.)
- `occasions`: text[] (work, casual, date, etc.)
- `favorite_colors`: text[]
- `style_icons`: text[]
- `brands`: text[]

### outfits
- `id`: uuid (primary key)
- `user_id`: uuid (foreign key to users.id)
- `created_at`: timestamp with time zone
- `name`: text
- `description`: text
- `occasion`: text
- `style_tags`: text[]
- `is_favorite`: boolean (default: false)

### outfit_items
- `id`: uuid (primary key)
- `outfit_id`: uuid (foreign key to outfits.id)
- `wardrobe_item_id`: uuid (foreign key to wardrobe_items.id)
- `position`: integer

## Row Level Security Policies

Each table should have RLS policies to:
1. Allow users to only see their own data
2. Prevent modifications to other users' data
3. Allow service role full access for admin functions

## Indexes

1. `users.stripe_customer_id`
2. `wardrobe_items.user_id`
3. `outfits.user_id`
4. `style_preferences.user_id`
5. `user_photos.user_id`

## Functions

### analyze_wardrobe()
- Triggers AI analysis of wardrobe items
- Updates style ratings
- Decrements monthly_analyses_remaining
- Updates last_analysis_date

### generate_outfits()
- Creates outfit combinations based on wardrobe items and style preferences
- Uses AI to ensure combinations make sense
- Stores results in outfits and outfit_items tables 
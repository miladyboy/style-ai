export type User = {
  id: string
  email: string
  stripe_customer_id?: string
  subscription_status: 'active' | 'inactive'
  monthly_analyses_remaining: number
  last_analysis_date?: Date
}

export type WardrobeItem = {
  id: string
  user_id: string
  photo_url: string
  category: 'top' | 'bottom' | 'dress' | 'outerwear' | 'shoes' | 'accessories'
  style_rating?: 'cool' | 'neutral' | 'not_stylish'
  color?: string
  description?: string
  active: boolean
  last_analyzed_at?: Date
}

export type StylePreferences = {
  id: string
  user_id: string
  preferred_styles: string[]
  occasions: string[]
  favorite_colors: string[]
  style_icons: string[]
  brands: string[]
}

export type Outfit = {
  id: string
  user_id: string
  name: string
  description?: string
  occasion?: string
  style_tags: string[]
  is_favorite: boolean
  items: WardrobeItem[]
} 
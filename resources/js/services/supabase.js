import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const wishService = {
  async addWish(windowId, rarity) {
    return supabase
      .from('wishes')
      .insert([{ window_id: windowId, rarity, timestamp: new Date().toISOString() }])
      .select()
  },

  async getWishes(windowId) {
    return supabase
      .from('wishes')
      .select('*')
      .eq('window_id', windowId)
      .order('timestamp', { ascending: false })
  }
}


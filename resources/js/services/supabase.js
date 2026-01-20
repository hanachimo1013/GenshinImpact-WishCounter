import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Wish functions
export const wishService = {
  async addWish(windowId, rarity) {
    const { data, error } = await supabase
      .from('wishes')
      .insert([
        {
          window_id: windowId,
          rarity: rarity,
          timestamp: new Date().toISOString()
        }
      ])
      .select()
    
    if (error) console.error('Error adding wish:', error)
    return { data, error }
  },

  async getWishes(windowId) {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .eq('window_id', windowId)
      .order('timestamp', { ascending: false })
    
    if (error) console.error('Error fetching wishes:', error)
    return { data, error }
  },

  async getStats(windowId) {
    const { data, error } = await supabase
      .from('wishes')
      .select('rarity')
      .eq('window_id', windowId)
    
    if (error) console.error('Error fetching stats:', error)
    return { data, error }
  }
}

import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfocqaraqlyyvsvwrfve.supabase.co ';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmb2NxYXJhcWx5eXZzdndyZnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzQ3ODgsImV4cCI6MjA5NDUxMDc4OH0.6ojdP4eE8oNOZw5KUJcn99CjCnpFc-MlNeV-DN-erVA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
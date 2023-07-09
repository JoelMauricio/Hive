"use client"
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://nbeavztkonchgnujeqve.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iZWF2enRrb25jaGdudWplcXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MTI3NjQsImV4cCI6MjAwMzk4ODc2NH0.0vyeIvO4KuY0IuVOUYh-21-j0rLIXPeM5MTAiQYJEFA', { auth: { persistSession: false } })

export default supabase;
import { createClient } from "@supabase/supabase-js";

// MOVE THIS TO .ENV
// const url = process.env.SUPABASE_URL
// const apiKey = process.env.SUPABASE_KEY
const supabase = createClient(
  "https://pcvfgnjftgfujcpjvgcq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjdmZnbmpmdGdmdWpjcGp2Z2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTgwMDMsImV4cCI6MjA1NDA5NDAwM30.xZXanUX2g9DhNza6W-iG9YwqQwxo6gdxsXmolzCZLZA"
);

export default supabase;

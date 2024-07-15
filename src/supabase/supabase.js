import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qokziwjsuawugfeuebxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFva3ppd2pzdWF3dWdmZXVlYnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTA4NTAsImV4cCI6MjAzMzkyNjg1MH0.arvb7Y4UOZFGKZ_pNvfjM-WeRqtJIzj23N9OdFz2YWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tvnnualxikgrmlkbyngc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2bm51YWx4aWtncm1sa2J5bmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMTQ0ODcsImV4cCI6MjA1MTc5MDQ4N30.hGRII8-cEXsiIivRfRNTN-KyKbOPi1NixORGTvOsNzc';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

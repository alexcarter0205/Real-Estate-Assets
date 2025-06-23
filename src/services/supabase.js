import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aoxsfgokuqsahcxscxqt.supabase.co";
const supabaseKey = "https://kgstkwzdktkfkufyqogv.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { supabase } from "$lib/supabase/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const { data } = await supabase.from("countries").select();
    return {
        countries: data ?? [],
    };
};

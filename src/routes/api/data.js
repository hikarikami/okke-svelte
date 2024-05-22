import { supabase } from '$lib/supabaseClient';

export async function get() {
    const { data, error } = await supabase
        .from('your_table')
        .select('*');

    if (error) {
        return {
            status: 500,
            body: { error: 'Error fetching data' }
        };
    }

    return {
        status: 200,
        body: { data }
    };
}

export async function post({ request }) {
    const body = await request.json();

    const { data, error } = await supabase
        .from('your_table')
        .insert([body]);

    if (error) {
        return {
            status: 500,
            body: { error: 'Error inserting data' }
        };
    }

    return {
        status: 201,
        body: { data }
    };
}
// src/routes/api/data.ts
import { supabase } from '$lib/supabaseClient';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
    const { data, error } = await supabase
        .from('transactions')
        .select('*');

    if (error) {
        return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
};

export const post: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const { data, error } = await supabase
        .from('transactions')
        .insert([body]);

    if (error) {
        return new Response(JSON.stringify({ error: 'Error inserting data' }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 201 });
};
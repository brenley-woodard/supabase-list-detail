const SUPABASE_URL = 'https://ogfxwdqfdtaaoiuiclsh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZnh3ZHFmZHRhYW9pdWljbHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjIsImV4cCI6MTk4MzY4NDA2Mn0.5JRX_e27xoEYI26VTDundVtD05vASo1z964M0KcbMNc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllFoods() {
    const response = await client.from('favorite_foods').select();
    return response.data;
}

export async function getFood(id) {
    const response = await client.from('favorite_foods').select('*').match({ id: id }).single();
    return response;
}

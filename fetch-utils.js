const SUPABASE_URL = 'https://dssscdbblqlagvgvvtkc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzc3NjZGJibHFsYWd2Z3Z2dGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMTYsImV4cCI6MTk4MzY4NDAxNn0.ZLiT0DIvTuegM8zzRIvSgVzLLFRk-1PwYGXz7BhqKk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function getUser() {
    console.log('client', client.auth.session());
    return client.auth.session() && client.auth.session().user;
}

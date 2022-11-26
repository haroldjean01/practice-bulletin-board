const SUPABASE_URL = 'https://dssscdbblqlagvgvvtkc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzc3NjZGJibHFsYWd2Z3Z2dGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMTYsImV4cCI6MTk4MzY4NDAxNn0.ZLiT0DIvTuegM8zzRIvSgVzLLFRk-1PwYGXz7BhqKk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

// Get out client's session and session user
export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function redirectIfLoggedIn() {
    const user = getUser();

    if (!user) {
        location.replace('./other-page');
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

// fetch posts function
export async function fetchPosts() {
    const response = await client.from('demo_posts').select('*');
    response.data;
}
// create posts function
export async function createNewPost(post) {
    const response = await client.from('demo_posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        // console.error(response.error);
    }
}

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
});

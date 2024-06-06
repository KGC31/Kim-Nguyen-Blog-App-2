import axios from 'axios';

export async function getCsrfToken() {
    try {
        const response = await axios.get('https://kim-nguyen-blog-app-server-26dt91tgs-kgc31s-projects.vercel.app/api/csrf-token/', {
            withCredentials: true,  // Ensure cookies are included in the request
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        sessionStorage.setItem("csrf", data);

        return data;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        throw new Error('Failed to fetch CSRF token');
    }
}

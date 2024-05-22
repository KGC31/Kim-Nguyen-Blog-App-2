// utils/csrf.ts

export async function getCsrfToken() {
    try {
        const response = await fetch('http://localhost:8000/api/csrf-token/', {
            method: 'GET',
            credentials: 'include',  // Ensure cookies are included in the request
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch CSRF token');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        throw error;
    }
}

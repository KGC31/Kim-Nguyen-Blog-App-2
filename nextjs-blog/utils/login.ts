import axios from 'axios';

export async function userLogin(loginData) {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login/', loginData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        // Store the tokens and user ID in sessionStorage
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        sessionStorage.setItem('userId', data.user_id);

    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle axios-specific errors
            throw new Error('Login failed: ' + (error.response?.data?.message || error.message));
        } else {
            // Handle generic errors
            throw new Error('Login failed');
        }
    }
}

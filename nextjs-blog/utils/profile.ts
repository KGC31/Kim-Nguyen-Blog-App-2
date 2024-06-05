// utils/profile.ts
import axios from 'axios';

// Define user data object
interface UserData {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export async function getUserProfile(userID: string): Promise<UserData | null> {
    try {
        const csrfToken: string | null = sessionStorage.getItem("csrf");
        const jwtToken: string | null = sessionStorage.getItem("access_token");

        if (csrfToken && jwtToken) {
            const response = await axios.get(`http://localhost:8000/api/auth/profile/${userID}/`, {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json',
                },
                withCredentials: true,  // Ensure cookies are included in the request
            });

            const data: UserData = response.data;
            return data;
        } else {
            throw new Error('CSRF token or JWT token is missing');
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Error response data:', error.response.data);
        } else {
            console.error('Fetch error:', error);
        }
        throw new Error('Failed to fetch user data');
    }
}

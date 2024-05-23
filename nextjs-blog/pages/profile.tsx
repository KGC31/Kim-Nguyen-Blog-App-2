import { useState, useEffect } from 'react';
import { getCsrfToken } from '../utils/csrf';

export default function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('access_token');

        const fetchUserData = async () => {
            try {
                const csrfToken = await getCsrfToken();
                console.log('CSRF Token:', csrfToken);
                console.log('JWT Token:', token);

                const response = await fetch(`http://localhost:8000/api/auth/profile/${userId}/`, {
                    method: 'POST',
                    credentials: 'include',  // Ensure cookies are included in the request
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'X-CSRFToken': csrfToken,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error response data:', errorData);
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Failed to fetch user data');
            }
        };

        if (userId && token) {
            fetchUserData();
        } else {
            setError('User ID or token is missing');
        }
    }, []);

    return (
        <div>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>First Name: {userData.first_name}</p>
                    <p>Last Name: {userData.last_name}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

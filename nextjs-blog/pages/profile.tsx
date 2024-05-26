import { useState, useEffect } from 'react';
import { getCsrfToken } from '../utils/csrf';
import styles from '../styles/profile.module.css';

export default function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {       
        const user_id = localStorage.getItem('user_id');
        const jwt_token = localStorage.getItem('access_token');

        const fetchUserData = async () => {
            try {
                const csrfToken = await getCsrfToken();

                const response = await fetch(`http://localhost:8000/api/auth/profile/${user_id}/`, {
                    method: 'POST',
                    credentials: 'include',  // Ensure cookies are included in the request
                    headers: {
                        'Authorization': `Bearer ${jwt_token}`,
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
                console.log(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };
        
        if (user_id && jwt_token) {
            fetchUserData();
        } else {
            setError('User ID or token is missing');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {userData && (
                <div>
                    <div className={styles.container}>
                    </div>
                    <div className='-translate-y-20'>
                        <div className='w-screen px-20 py-2'>
                            <div className='border border-[#fff] rounded-xl flex place-items-center p-4 bg-white'>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" 
                                    height={64} 
                                    width={64} 
                                    alt="Logo" 
                                    className='border rounded-xl' 
                                />
                                <h1 className='text-2xl ms-4'>Welcome {userData.username}!</h1>
                            </div>
                        </div>
                        <div className='mt-5 w-screen px-20'>
                            <div className='grid grid-rows-2 grid-cols-2 bg-white p-10 gap-10 border rounded-xl'>
                                <div>
                                    <h1 className='text-xl'>Email</h1>
                                    <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.email} />
                                </div>
                                <div>
                                    <h1 className='text-xl'>Username</h1>
                                    <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.username} />
                                </div>
                                <div>
                                    <h1 className='text-xl'>First name</h1>
                                    <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.first_name} />
                                </div>
                                <div>
                                    <h1 className='text-lg'>Last name</h1>
                                    <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.last_name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    );
}

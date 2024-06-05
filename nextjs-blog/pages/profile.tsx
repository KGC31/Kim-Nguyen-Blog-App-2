'use client'
import { useState, useEffect } from 'react';
import { getUserProfile } from '../utils/profile';
import styles from '../styles/profile.module.css';

interface UserData {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export default function UserProfile() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    let userId;
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            userId = sessionStorage.getItem("userID");
        }
        const fetchUserData = async () => {
            if (userId) {
                const data = await getUserProfile(userId);
                setUserData(data);
            }
            setLoading(false);
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Error loading user data</div>;
    }

    return (
        <>
            <div>
                <div className={styles.container}></div>
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
                                <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.email} readOnly />
                            </div>
                            <div>
                                <h1 className='text-xl'>Username</h1>
                                <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.username} readOnly />
                            </div>
                            <div>
                                <h1 className='text-xl'>First name</h1>
                                <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.first_name} readOnly />
                            </div>
                            <div>
                                <h1 className='text-lg'>Last name</h1>
                                <input className='border-s-2 border-black ps-0.5' type="text" placeholder={userData.last_name} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

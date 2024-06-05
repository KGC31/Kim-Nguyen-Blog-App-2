import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts } from '../../utils/posts';
import gsap from 'gsap';
import styles from '../styles/blog.module.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(".text", {
                x: e.clientX / 2,
                y: e.clientY / 2,
                stagger: -0.02
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.cursor}>
                    <div className={`${styles.text} text absolute text-8xl font-medium uppercase text-center text-[#111]`} style={{ WebkitTextStroke: '1px white', textStroke: '1px white' }}>Kim Nguyen Blog</div>
                    <div className={`${styles.text} text absolute text-8xl font-medium uppercase text-center text-[#111]`} style={{ WebkitTextStroke: '1px white', textStroke: '1px white' }}>Kim Nguyen Blog</div>
                    <div className={`${styles.text} text absolute text-8xl font-medium uppercase text-center text-[#111]`} style={{ WebkitTextStroke: '1px white', textStroke: '1px white' }}>Kim Nguyen Blog</div>
                    <div className={`${styles.text} text absolute text-8xl font-medium uppercase text-center text-[#111]`} style={{ WebkitTextStroke: '1px white', textStroke: '1px white' }}>Kim Nguyen Blog</div>
                    <div className={`${styles.text} text absolute text-8xl font-medium uppercase text-center text-white`}>Kim Nguyen Blog</div>
                </div>
            </div>
            <div className={styles.search}>
                <form action="" className='flex flex-row border border-white rounded-xl p-1 items-center'>
                    <input type="text" className='bg-transparent outline-none text-white w-96 h-8' />
                    <button type='submit'>
                        <svg id="Search" width="24" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.2481" cy="10.7887" r="8.03854" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
                            <path d="M16.7369 16.7083L21.2904 21.2499" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
                        </svg>
                    </button>
                </form>
            </div>
            <div className={styles.postsList}>
                {posts.map((post) => (
                    <div key={post.id} className={`${styles.post} text-white flex flex-row my-5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#e8eaed"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                        <div>
                            <Link href={`/blog/${post.id}`}>
                                <h1 className='text-5xl'>
                                    {post.properties.Name.title[0].plain_text}
                                </h1>
                            </Link>
                            <div className='flex flex-row gap-4'>
                                {post.properties.Tags.multi_select.map((tag) =>(
                                    <p className='px-3 border border-white rounded-xl cursor-pointer'>{tag.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

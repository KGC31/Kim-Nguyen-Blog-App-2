import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchPostContent = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/api/blog/${id}/`);
                    console.log(response.data)
                    setPost(response.data);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                    setLoading(false);
                }
            };

            fetchPostContent();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='px-24 pt-20 text-xl blog-wrapper'>
            {post && (
                <div className='text-white'>
                    {/* Render additional post content here */}
                    <ReactMarkdown>{post.markdown}</ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default BlogPost;

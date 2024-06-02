import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/apprentice.css';
import python from 'highlight.js/lib/languages/python';

// Then register the languages you need
hljs.registerLanguage('python', python);

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        hljs.initHighlighting();
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
        <>
            <div className='px-40 py-20 text-xl blog-wrapper text-white'>
                {post && (
                    <div className='text-2xl'>
                        {/* Render additional post content here */}
                        <ReactMarkdown>{post.markdown}</ReactMarkdown>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogPost;

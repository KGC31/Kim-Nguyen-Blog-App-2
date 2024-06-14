'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';  // Import remark-gfm
import 'katex/dist/katex.min.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/apprentice.css';  // Adjust the theme as needed
import { getPost } from '../../utils/post';  // Adjust the path as needed

interface Post {
    markdown: string;
}

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (id) {
            const fetchPostContent = async () => {
                try {
                    const data = await getPost(id as string);
                    console.log(data.json);
                    console.log(data.markdown);
                    setPost(data);
                    setLoading(false);
                } catch (err) {
                    setError(err as Error);
                    setLoading(false);
                }
            };

            fetchPostContent();
        }
    }, [id]);

    useEffect(() => {
        if (!loading && post) {
            hljs.highlightAll();
        }
    }, [loading, post]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='px-10 md:px-40 py-20 text-base md:text-xl blog-wrapper text-white overflow-x-auto'>
            {post && (
                <div className='md:text-2xl'>
                    <ReactMarkdown
                        children={post.markdown}
                        remarkPlugins={[remarkMath, remarkGfm]}  // Add remarkGfm plugin here
                        rehypePlugins={[rehypeKatex]}
                    />
                </div>
            )}
        </div>
    );
};

export default BlogPost;

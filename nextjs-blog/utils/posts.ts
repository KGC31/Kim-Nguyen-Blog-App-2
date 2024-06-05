import axios from 'axios';

export async function getPosts() {
    try {
        const response = await axios.get('http://localhost:8000/api/blog/');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}

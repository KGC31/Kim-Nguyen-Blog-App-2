import axios from "axios";

export async function getPost(id: string | string[] | undefined) {
    try {
        const response = await axios.get(`https://kim-nguyen-blog-app-server.vercel.app/api/blog/${id}/`);
        return response.data;
    } catch (err) {
        throw err;
    }
}
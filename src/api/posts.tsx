import API from "./axiosClient"
export const fetchPost = (id:string) => API.get(`/posts/${id}`);
export const fetchPosts = (page:any) => API.get(`/posts?page=${page}`);
export const fetchPostByUser = (id:any) => API.get(`/posts/user/${id}`);
export const createPost = (newPost:any) => API.post('/posts', newPost);
export const likePost = (id:string) => API.patch(`/posts/${id}/likePost`);
export const comment = (value:any, id:string) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id:string, updatedPost:any) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id:string) => API.delete(`/posts/${id}`);

import API from "./axiosClient"

export const signIn = (formData:any) => API.post('/user/signin', formData);
export const signUp = (formData:any) => API.post('/user/signup', formData);
export const updateProfile = (formData:any,id:string) => API.put(`/user/profile/${id}`, formData);

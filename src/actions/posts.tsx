import * as api from '../api/posts';
import {
  COMMENT,
  CREATE,
  DELETE,
  END_LOADING,
  FETCH_ALL,
  FETCH_POST,
  LIKE,
  START_LOADING,
  UPDATE,
} from '../constants/actionTypes';

export const getPost = (id: any) => async (dispatch: any) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (page: any) => async (dispatch: any) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchPosts(page);

    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost =
  (post: any, history: any) => async (dispatch: any) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createPost(post);
      console.log('🚀 ~ file: posts.tsx ~ line 50 ~ createPost ~ data', data);
      dispatch({ type: CREATE, payload: data });

      history(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  //   const user = JSON.parse(localStorage.getItem('profile') as string);

  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value: any, id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const getPostByUser = (id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPostByUser(id);
    console.log('🚀 ~ file: posts.tsx ~ line 99 ~ getPostByUser ~ data', data);
    localStorage.setItem('postByUser', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

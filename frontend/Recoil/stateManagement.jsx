import { atom } from "recoil";
import { selector } from "recoil";
import { BASE_URL } from "../config";


export const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    username: "",
  },
});
export const loginState = atom({
  key: "loginState",
  default: {
    username: "",
    password: "",
  },
});
export const loginAPI = selector({
  key: "loginAPI",
  get: async ({ get }) => {
    const loginData = get(loginState);

    const response = await fetch("http://localhost:3000/user/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();
    return data;
  },
});


export const editorState = atom({
  key: "editorState",
  default: {
    title: "",
    mainContent: "",
    photos: null,
  },
});

export const heartFilledState = atom({
  key: 'heartFilledState',
  default: false,
});

export const postState = atom({
  key: 'postState',
  default: null,
});


export const postIdState = atom({
  key: 'postIdState',
  default: null,
});


export const fetchPostData = selector({
  key: 'fetchPostData',
  get: async ({ get }) => {
    const PostId = get(postIdState);
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}/PostBlog/${PostId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data.post;
  },
});
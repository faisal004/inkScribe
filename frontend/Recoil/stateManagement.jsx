import { atom } from "recoil";
import { selector } from "recoil";



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

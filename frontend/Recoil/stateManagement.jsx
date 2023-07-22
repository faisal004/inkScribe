import { atom } from "recoil";
import { selector } from "recoil";

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
export const signupState = atom({
  key: "signupState",
  default: {
    username: "",
    email: "",
    password: "",
  },
});
export const signupAPI = selector({
  key: "signupAPI",
  get: async ({ get }) => {
    const signupData = get(signupState);

    const response = await fetch("http://localhost:3000/user/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const data = await response.json();
    return data;
  },
});

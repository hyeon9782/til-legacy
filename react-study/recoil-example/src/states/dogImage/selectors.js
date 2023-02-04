import { selector } from "recoil";

export const randomDog = selector({
  key: "randomDog",
  get: async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
  },
});
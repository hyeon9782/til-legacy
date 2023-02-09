import { atom, selector } from "recoil";

export const tabState = atom({
  key: "tabState", // unique ID (with respect to other atoms/selectors)
  default: [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ],
});

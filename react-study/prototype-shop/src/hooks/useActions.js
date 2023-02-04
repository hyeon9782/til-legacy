import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// 함수를 받아서 보내주는 hook
export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);
  return { addToOrder, remove, removeAll };
}

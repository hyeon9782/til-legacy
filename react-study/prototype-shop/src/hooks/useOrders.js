import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// 상태를 받아서 보내주는 hook
export default function useOrders() {
  const { orders } = useContext(AppStateContext);
  return orders;
}

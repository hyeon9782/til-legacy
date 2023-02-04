import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// 상태를 받아서 보내주는 hook
export default function usePrototypes() {
    const {prototypes} = useContext(AppStateContext);
    return prototypes
}
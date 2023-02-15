import { RootState } from "@src/store";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;

import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useLightMode = (key, initialValue) => {
  const [lightMode, setlightMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light-mode")
      : document.body.classList.remove("light-mode");
  }, [lightMode]);

  return [lightMode, setlightMode];
};

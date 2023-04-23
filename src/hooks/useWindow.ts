import { useEffect, useState } from "react";

export const useWindow = () => {
  const [isWindow, setIsWindow] = useState(false);
  useEffect(() => setIsWindow(true), []);
  return { isWindow };
};

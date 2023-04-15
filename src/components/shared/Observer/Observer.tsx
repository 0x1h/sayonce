import { useEffect, useRef } from "react";
import { useIsVisible } from "./hook/useObserve";

type ObserverProps = {
  onObserve?: () => void;
  cancel?: boolean;
};

export const Observer = ({ onObserve, cancel }: ObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIsVisible(ref);
  

  useEffect(() => {
    if (cancel) return;

    if (isIntersecting) {
      onObserve?.();
    }
  }, [isIntersecting]);

  return <div ref={ref} />;
};

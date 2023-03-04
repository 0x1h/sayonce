import { NextUIProvider } from "@nextui-org/react";

export const NextUi = ({ children }: React.PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

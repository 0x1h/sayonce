import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

export const NextUi = ({ children }: React.PropsWithChildren) => {
  return <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
};

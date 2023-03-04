import { NextUi } from "./NextUi";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return <NextUi>{children}</NextUi>;
};

import { Mobile } from "./views/Mobile";
import { Desktop } from "./views/Desktop";
import { useWindow } from "./hook/useWindow";

export const Navbar = () => {
  const { isTablet } = useWindow();

  return isTablet ? (
    <Mobile />
  ) : (
    <Desktop />
  );
};

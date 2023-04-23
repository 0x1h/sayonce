import { useContext } from "react";
import { NavbarContext } from "../Mobile/context/NavbarContext";
import { SMenu, SMenuLi, SMenuUl } from "./SMenu.styled";
import { navbarRoutingLinks } from "../../constant/navbarRoutingLinks";
import { activeRouter } from "../../utils/activeRouter";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/shared/Button";

export const Menu = () => {
  const { open, setOpen } = useContext(NavbarContext);
  const { pathname } = useRouter();

  return open ? (
    <SMenu open={open}>
      <SMenuUl>
        {navbarRoutingLinks.map((link) => (
          <SMenuLi
            onClick={() => setOpen(false)}
            active={activeRouter({
              router: pathname,
              expectedRouter: link.id,
            })}
            key={link.id}
          >
            <Link href={link.url}>{link.name}</Link>
          </SMenuLi>
        ))}
      </SMenuUl>
    </SMenu>
  ) : null;
};

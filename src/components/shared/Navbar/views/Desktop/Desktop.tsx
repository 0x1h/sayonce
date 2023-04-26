import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { SNavbar, SNavbarLi } from "../../SNavbar.styled";
import Link from "next/link";
import { Avatar } from "@/components/shared/Avatar";
import { Session } from "next-auth";
import { navbarRoutingLinks } from "../../constant/navbarRoutingLinks";
import { activeRouter } from "../../utils/activeRouter";
import { useRouter } from "next/router";

export const Desktop = ({
  session,
  onAuthOpen
}: {
  session?: Session;
  onAuthOpen?: () => void;
}) => {
  const { pathname } = useRouter();

  return (
    <PaddedWrapper>
      <SNavbar>
        <Link href="/">Sayonce</Link>
        <div className="flex items-center gap-5">
          {navbarRoutingLinks.map((link) => (
            <SNavbarLi
              active={activeRouter({
                router: pathname,
                expectedRouter: link.id,
              })}
              key={link.id}
            >
              <Link href={link.url}>{link.name}</Link>
            </SNavbarLi>
          ))}
        </div>
        <Avatar
          src={session?.user?.image || ""}
          onClick={onAuthOpen}
        />
      </SNavbar>
    </PaddedWrapper>
  );
};

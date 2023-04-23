import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { SNavbar } from "../../SNavbar.styled";
import Link from "next/link";

export const Desktop = () => {
  return (
    <PaddedWrapper>
      <SNavbar>
        <Link href="/">Sayonce</Link>
      </SNavbar>
    </PaddedWrapper>
  );
};

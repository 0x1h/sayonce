import Twemoji from "react-twemoji";
import { SNoPosts } from "./SNoPosts.styled";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export const NoPosts = () => {
  return (
    <SNoPosts>
      <Twemoji>😭</Twemoji>
      <p>Nobody has posted yet, how about being the first?</p>
      <Link href="/create">
        <Button>Yeah sure</Button>
      </Link>
    </SNoPosts>
  );
};

import Twemoji from "react-twemoji";
import { SNoPosts } from "./SNoPosts.styled";
import { Button } from "@nextui-org/react";
import Link from "next/link";

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

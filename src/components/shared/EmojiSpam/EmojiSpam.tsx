import { useEffect, useState } from "react";
import { SEmojiSpam } from "./SEmojiSpam.styled";
import Twemoji from "react-twemoji";
import { emojis } from "./constant";

export const EmojiSpam: React.FC = () => {
  const [emoji, setEmoji] = useState<string>("");

  useEffect(() => {
    const randomEmoji: string = emojis[
      Math.floor(Math.random() * emojis.length)
    ] as string;
    setEmoji(randomEmoji);
  }, []);

  return (
    <SEmojiSpam>
      <Twemoji>{emoji}</Twemoji>
    </SEmojiSpam>
  );
};

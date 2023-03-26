import { useEffect, useState } from "react";
import { SEmojiSpam } from "./SEmojiSpam.styled";
import Twemoji from "react-twemoji";
import { emojis } from "./constant";

export const EmojiSpam = () => {
  const [emoji, setEmoji] = useState("🦄");

  useEffect(() => {
    let interval: NodeJS.Timer;

    interval = setInterval(() => {
      const randomEmoji = emojis[
        Math.floor(Math.random() * emojis.length)
      ] as string;
      setEmoji(randomEmoji);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <SEmojiSpam>
      <Twemoji>{emoji}</Twemoji>
    </SEmojiSpam>
  );
};

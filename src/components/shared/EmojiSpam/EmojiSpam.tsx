import { useEffect, useState, useCallback } from "react";
import { SEmojiSpam } from "./SEmojiSpam.styled";
import Twemoji from "react-twemoji";
import { emojis } from "./constant";

export const EmojiSpam: React.FC = () => {
  const [emoji, setEmoji] = useState<string>("🦄");

  const intervalFunction = useCallback(() => {
    const randomEmoji: string = emojis[
      Math.floor(Math.random() * emojis.length)
    ] as string;
    setEmoji(randomEmoji);
  }, [setEmoji]);

  useEffect(() => {
    const interval = setInterval(intervalFunction, 500);
    return () => clearInterval(interval);
  }, [intervalFunction]);

  return (
    <SEmojiSpam>
      <Twemoji>{emoji}</Twemoji>
    </SEmojiSpam>
  );
};

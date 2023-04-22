import { type ChangeEvent, useState } from "react";
import { Loading, Text, type FormElement } from "@nextui-org/react";
import Twemoji from "react-twemoji";
import {
  SGifEmojiContainer,
  GSGridContainer,
  SGifText,
} from "./SGifEmoji.styled";
import debounce from "lodash/debounce";
import { api } from "@/utils/api";
import { GifCard } from "@/components/shared/GifCard/GifCard";
import { Modal } from "@/components/shared/Modal";
import { Input } from "@/components/shared/Input";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
  setGif: (gif: string) => void;
};

export const GifModal = ({
  openModal,
  setOpenModal,
  setGif,
}: GifModalProps) => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = api.gif.useQuery({ search });

  return (
    <Modal blur open={openModal} onClose={() => setOpenModal()} width={700}>
      <Modal.Header>
        <Input
          autoFocus
          onChange={debounce(
            (e: ChangeEvent<FormElement>) => setSearch(e.target.value),
            500
          )}
          bordered
          loading={isLoading}
          placeholder="Search"
        />
      </Modal.Header>
      <Modal.Body>
        {data?.gifs?.results?.length === 0 && !data?.gifs?.error && (
          <SGifEmojiContainer>
            <Twemoji>😶‍🌫️</Twemoji>
            <Text b>Ummm... Nothing found lol</Text>
          </SGifEmojiContainer>
        )}
        {data?.gifs?.error && (
          <SGifEmojiContainer>
            <Twemoji>🧐</Twemoji>
            <SGifText>
              Fun Fact: If you would put some words in search would be great
            </SGifText>
          </SGifEmojiContainer>
        )}
        <GSGridContainer>
          {search &&
            (data?.gifs?.results?.length as number) > 0 &&
            data?.gifs?.results.map((post) => (
              <GifCard
                onClick={setGif}
                key={post.id}
                img={post.media_formats.gif.url}
                title={post.title}
              />
            ))}
        </GSGridContainer>
      </Modal.Body>
    </Modal>
  );
};

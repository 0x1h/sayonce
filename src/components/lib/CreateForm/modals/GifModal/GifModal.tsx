import { type ChangeEvent, useState } from "react";
import {
  Modal,
  Input,
  Loading,
  Text,
  type FormElement,
} from "@nextui-org/react";
import Twemoji from "react-twemoji";
import { SGifEmojiContainer, GSGridContainer } from "./SGifEmoji.styled";
import debounce from "lodash/debounce";
import { api } from "@/utils/api";
import { GifCard } from "@/components/shared/GifCard/GifCard";

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
    <Modal
      blur
      scroll
      aria-labelledby="modal-title"
      open={openModal}
      onClose={() => setOpenModal()}
      width="700px"
    >
      <Modal.Header>
        <Input
          aria-labelledby="input"
          width="100%"
          autoFocus
          onChange={debounce(
            (e: ChangeEvent<FormElement>) => setSearch(e.target.value),
            500
          )}
          size="lg"
          bordered
          contentRight={isLoading && <Loading size="xs" color="white" />}
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
            <Text b>
            Fun Fact: If you would put some words in search would be great
            </Text>
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

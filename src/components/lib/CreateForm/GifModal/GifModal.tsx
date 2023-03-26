import { useState } from "react";
import { Modal, Input, Grid, Loading, Text } from "@nextui-org/react";
import Twemoji from "react-twemoji";
import { SGifEmojiContainer, GSGridContainer } from "./SGifEmoji.styled";
import debounce from "lodash/debounce";
import { api } from "@/utils/api";
import { GifCard } from "@/components/shared/GifCard/GifCard";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
};

export const GifModal = ({ openModal, setOpenModal }: GifModalProps) => {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = api.gif.useQuery({ search });

  if (!openModal) return null;

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
          onChange={debounce((e) => setSearch(e.target.value), 500)}
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
            <Text b>
              Ummm... Nothing found lol
            </Text>
          </SGifEmojiContainer>
        )}
        {data?.gifs?.error && (
          <SGifEmojiContainer>
            <Twemoji>🧐</Twemoji>
            <Text b>
              Fan Fact: If you would put some words in search would be great
            </Text>
          </SGifEmojiContainer>
        )}
        <GSGridContainer>
          {search &&
            (data?.gifs?.results?.length as number) > 0 &&
            data?.gifs?.results.map((post) => (
              <GifCard img={post.media_formats.gif.url} title={post.title} />
            ))}
        </GSGridContainer>
      </Modal.Body>
    </Modal>
  );
};

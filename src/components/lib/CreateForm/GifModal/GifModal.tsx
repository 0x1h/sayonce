import React, { useState } from "react";
import { Modal, Input, Grid, Loading, Text } from "@nextui-org/react";
import Twemoji from "react-twemoji";
import { SGifEmojiContainer } from "./SGifEmoji.styled";
import debounce from "lodash/debounce";
import { api } from "@/utils/api";
import { GifCard } from "@/components/shared/GifCard/GifCard";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
};

export const GifModal = ({ openModal, setOpenModal }: GifModalProps) => {
  const [search, setSearch] = useState("random");
  const { data, isLoading } = api.gif.useQuery({ search });

  
  
  if (!openModal) return null;
  
  console.log(data?.gifs);

  return (
    <Modal
      blur
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
        {!search.trim() && data?.gifs?.results?.length === 0 && (
          <SGifEmojiContainer>
            <Twemoji>🧐</Twemoji>
            <Text b>
              Fan Fact: If you would put some words in search would be great
            </Text>
          </SGifEmojiContainer>
        )}
        <Grid.Container gap={2} justify="flex-start">
          {search && data?.gifs?.results?.length as number > 0 && (
            <Grid.Container gap={2} justify="flex-start">
              {data?.gifs.results.map((post) => (
                <Grid xs={12} sm={6} key={post.id}>
                  <GifCard img={post.media_formats.gif.url} title={post.title}/>
                </Grid>
              ))}
            </Grid.Container>
          )}
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
};

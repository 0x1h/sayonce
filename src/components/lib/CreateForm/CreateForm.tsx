import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { Button, Card, Input, Text, Textarea } from "@nextui-org/react";
import {
  SCreateWrapper,
  SCreateForm,
  SCardWrapper,
  STextCenter,
} from "./SCreateForm.styled";
import { EmojiSpam } from "@/components/shared/EmojiSpam/EmojiSpam";
import { useState } from "react";
import { GifModal } from "./GifModal/GifModal";

export const CreateForm = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <PaddedWrapper>
      <GifModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
      <SCreateForm>
        <SCreateWrapper>
          <Input
            size="xl"
            label="Title"
            required
            width="100%"
            aria-labelledby="search"
          />
          <Textarea
            size="xl"
            label="Description"
            required
            width="100%"
            aria-labelledby="description"
          />
          <SCardWrapper>
            <Text b>Gif</Text>
            <Card
              onPress={() => setOpenModal(true)}
              isPressable
              aria-labelledby="card"
              style={{
                padding: "24px",
              }}
            >
              <EmojiSpam />
              <STextCenter>
                <Text size={"$2xl"} b>
                  Search GIF
                </Text>
              </STextCenter>
            </Card>
          </SCardWrapper>
          <SCardWrapper>
            <Button flat size="xl" color="success" disabled>
              Post ✨
            </Button>
          </SCardWrapper>
        </SCreateWrapper>
      </SCreateForm>
    </PaddedWrapper>
  );
};

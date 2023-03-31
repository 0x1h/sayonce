import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import {
  Button,
  Card,
  FormElement,
  Image,
  Input,
  Text,
  Textarea,
} from "@nextui-org/react";
import {
  SCreateWrapper,
  SCreateForm,
  SCardWrapper,
  STextCenter,
} from "./SCreateForm.styled";
import { EmojiSpam } from "@/components/shared/EmojiSpam/EmojiSpam";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { GifModal } from "./modals/GifModal/GifModal";
import { values } from "./template";
import { useValidate } from "./hooks/useValidate";
import { ConfirmModal } from "./modals/ConfirmModal";
import { AuthModal } from "./modals/AuthModal";
import { AUTH_STAGE_ENUM, AuthContext } from "@/contexts/AuthContext";

export const CreateForm = () => {
  const [formValues, setFormValues] = useState(values);
  const [submited, setSubmited] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const { errors } = useValidate(formValues);
  const {authStage} = useContext(AuthContext)

  useEffect(() => {
      document.body.style.overflow = "visible"
  }, [openConfirmModal, openModal])

  const inputHandler = (e: ChangeEvent<FormElement>) => {
    const { value, name } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmited(true);

    if (Object.keys(errors).length > 0) return

    setOpenConfirmModal(true)
  };

  if(authStage === AUTH_STAGE_ENUM.UNAUTHORIZED) {
    return <AuthModal />
  }

  return (
    <PaddedWrapper>
      <ConfirmModal openModal={openConfirmModal} setOpenModal={() => setOpenConfirmModal(false)}/>
      <GifModal
        setGif={(gif) => {
          setFormValues((prev) => ({ ...prev, gif }));
          setOpenModal(false);
        }}
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
      <SCreateForm onSubmit={submitHandler}>
        <SCreateWrapper>
          <Input
            size="xl"
            label="Title"
            name="title"
            onChange={inputHandler}
            width="100%"
            aria-labelledby="search"
            status={errors.title && submited ? "error" : "default"}
            helperText={errors.title && submited ? errors.title : ""}
          />
          <Textarea
            size="xl"
            onChange={inputHandler}
            name="description"
            label="Description"
            status={errors.description && submited ? "error" : "default"}
            width="100%"
            aria-labelledby="description"
            helperText={
              errors.description && submited ? errors.description : ""
            }
          />
          <SCardWrapper error={!!(errors.gif && submited)}>
            <Text b color={errors.gif && submited ? "error" : undefined}>
              Gif
            </Text>
            <Card
              onPress={() => setOpenModal(true)}
              isPressable
              className="gif-card"
              aria-labelledby="card"
              style={{
                padding: "24px",
              }}
            >
              {formValues?.gif ? (
                <Image src={formValues.gif} style={{ borderRadius: "10px" }} />
              ) : (
                <>
                  <EmojiSpam />
                  <STextCenter>
                    <Text size={"$2xl"} b>
                      Search GIF
                    </Text>
                  </STextCenter>
                </>
              )}
            </Card>
          </SCardWrapper>
          <SCardWrapper>
            <Button flat size="xl" color="success" type="submit">
              Post ✨
            </Button>
          </SCardWrapper>
        </SCreateWrapper>
      </SCreateForm>
    </PaddedWrapper>
  );
};

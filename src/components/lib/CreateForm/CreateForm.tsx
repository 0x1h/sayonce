import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import {
  Card,
  FormElement,
  Image,
  Input,
  Loading,
  Text,
  Textarea,
} from "@nextui-org/react";
import { Button, buttonVariants } from "@/components/shared/Button";
import {
  SCreateWrapper,
  SCreateForm,
  SCardWrapper,
  STextCenter,
  SLoadingScreen,
} from "./SCreateForm.styled";
import { EmojiSpam } from "@/components/shared/EmojiSpam/EmojiSpam";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { GifModal } from "./modals/GifModal/GifModal";
import { values } from "./template";
import { useValidate } from "./hooks/useValidate";
import { ConfirmModal } from "./modals/ConfirmModal";
import { AuthModal } from "./modals/AuthModal";
import { AUTH_STAGE_ENUM, AuthContext } from "@/contexts/AuthContext";
import { SuccessModal } from "./modals/SuccessModal";
import { api } from "@/utils/api";
import { PostCooldownModal } from "./modals/PostCooldownModal";

export const CreateForm = () => {
  const [formValues, setFormValues] = useState(values);
  const [submited, setSubmited] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const { errors } = useValidate(formValues);
  const { authStage } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const {
    mutate: isPostMutate,
    isError,
    isLoading: postLoading,
    error,
  } = api.postAbility.useMutation();

  useEffect(() => {
    isPostMutate();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, [openConfirmModal, openModal]);

  const inputHandler = (e: ChangeEvent<FormElement>) => {
    const { value, name } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmited(true);

    if (Object.keys(errors).length > 0) return;

    setOpenConfirmModal(true);
  };

  if (postLoading) {
    return (
      <SLoadingScreen>
        <Loading size="xl" color={"white"} />
        <p>Please waitt... 😭</p>
      </SLoadingScreen>
    );
  }

  if (authStage === AUTH_STAGE_ENUM.UNAUTHORIZED) {
    return <AuthModal />;
  }

  if (success) {
    return <SuccessModal />;
  }

  if (isError) {
    return <PostCooldownModal date={error.message} />;
  }

  return (
    <PaddedWrapper>
      <ConfirmModal
        setSuccess={() => setSuccess(true)}
        form={formValues}
        openModal={openConfirmModal}
        setOpenModal={() => setOpenConfirmModal(false)}
      />
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
          <Input />
          {/* <Input
            size="xl"
            label="Title"
            name="title"
            onChange={inputHandler}
            width="100%"
            aria-labelledby="search"
            status={errors.title && submited ? "error" : "default"}
            helperText={errors.title && submited ? errors.title : ""}
          /> */}
          <Textarea
            size="xl"
            onChange={inputHandler}
            name="description"
            label="Description"
            status={errors.description && submited ? "error" : "default"}
            width="100%"
            maxLength={500}
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
              className="gif-card p-8"
              aria-labelledby="card"
            >
              {formValues?.gif ? (
                <Image
                  src={formValues.gif}
                  className="rounded-2xl"
                  alt="content gif"
                />
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
            <Button>Post ✨</Button>
          </SCardWrapper>
        </SCreateWrapper>
      </SCreateForm>
    </PaddedWrapper>
  );
};

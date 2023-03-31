import { Button, Image, Modal } from "@nextui-org/react";
import {
  SAuthButtonWrapper,
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
} from "./SAuthModal.styled";
import { FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const AuthModal = () => {
  const router = useRouter();

  return (
    <Modal
      blur
      scroll
      preventClose
      aria-labelledby="modal-title"
      open
      closeButton
      onCloseButtonClick={() => {
        // eslint-disable-next-line
        router.push("/");
      }}
      width="500px"
    >
      <Modal.Header>
        <SConfirmWrapper>
          <SConfirmTitle>Authorize Needed</SConfirmTitle>
          <SConfirmText>
            Login first and then do what ever you want darling.
          </SConfirmText>
        </SConfirmWrapper>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={
            "https://media.tenor.com/n1UhpR36Lq8AAAAd/mr-incredible-uncanny-mr-incredible-meme.gif"
          }
          alt="confirm image"
          style={{ borderRadius: "10px" }}
          width={"400px"}
        />
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Button
            flat
            onPress={() => {
              // eslint-disable-next-line
              signIn("discord");
            }}
          >
            <SAuthButtonWrapper>
              <FaDiscord />
              Authorize with Discord
            </SAuthButtonWrapper>
          </Button>
        </SConfirmButtonsWrapper>
      </Modal.Footer>
    </Modal>
  );
};

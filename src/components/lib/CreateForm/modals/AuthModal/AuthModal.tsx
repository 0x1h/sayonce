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
import { Modal } from "@/components/shared/Modal";
import Image from "next/image";
import { Button } from "@/components/shared/Button";

export const AuthModal = () => {
  const router = useRouter();

  return (
    <Modal
      blur
      preventClose
      aria-labelledby="modal-title"
      open
      onClose={() => {
        // eslint-disable-next-line
        router.push("/");
      }}
      width={500}
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
          width={400}
          height={400}
        />
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Button
            flat
            onClick={() => {
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

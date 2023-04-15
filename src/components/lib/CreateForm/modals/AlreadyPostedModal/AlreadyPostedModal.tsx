import { Button, Image, Modal } from "@nextui-org/react";
import {
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
} from "./SAlreadyPostedModal.styled";
import Link from "next/link";

export const AlreadyPostedModal = () => {
  return (
    <Modal
      blur
      scroll
      preventClose
      aria-labelledby="modal-title"
      open
      width="500px"
    >
      <Modal.Header>
        <SConfirmWrapper>
          <SConfirmTitle>You already did that</SConfirmTitle>
          <SConfirmText>
            You already posted once, you can not do that again.
          </SConfirmText>
        </SConfirmWrapper>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={"https://media.tenor.com/aeswYw-86k8AAAAC/no-nooo.gif"}
          alt="confirm image"
          style={{ borderRadius: "10px" }}
          width={"300px"}
        />
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Link href="/" shallow>
            <Button flat>
              Bruh 💀
            </Button>
          </Link>
        </SConfirmButtonsWrapper>
      </Modal.Footer>
    </Modal>
  );
};

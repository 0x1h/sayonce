import { Button, Image, Modal } from "@nextui-org/react";
import {
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
} from "./SConfirmModal.styled";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
};

export const ConfirmModal = ({ openModal, setOpenModal }: GifModalProps) => {
  if (!openModal) return null;

  return (
    <Modal
      blur
      scroll
      aria-labelledby="modal-title"
      open={openModal}
      onClose={() => setOpenModal()}
      width="500px"
    >
      <Modal.Header>
        <SConfirmWrapper>
          <SConfirmTitle>Are you sure?</SConfirmTitle>
          <SConfirmText>
            Once you publish it, you will not be able to create a new post or
            edit the text of this post again.
          </SConfirmText>
        </SConfirmWrapper>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={
            "https://media.tenor.com/XQ0mT-V1n30AAAAC/are-you-sure-about-that-the-rock.gif"
          }
          alt="confirm image"
          style={{ borderRadius: "10px" }}
          width={"400px"}
        />
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Button flat color="error" onPress={setOpenModal}>
            Nahh 💀
          </Button>
          <Button flat color="success">
            Yass 😍
          </Button>
        </SConfirmButtonsWrapper>
      </Modal.Footer>
    </Modal>
  );
};

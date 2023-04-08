import { Button, Image, Loading, Modal } from "@nextui-org/react";
import {
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
} from "./SConfirmModal.styled";
import { api } from "@/utils/api";
import { values } from "../../template";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
  form: typeof values;
};

export const ConfirmModal = ({
  openModal,
  setOpenModal,
  form,
}: GifModalProps) => {
  const createPost = api.createPost.useMutation();
  const { session } = useContext(AuthContext);

  if (!openModal) return null;

  const submitPostCreate = () => {
    createPost.mutate({
      client_id: session?.user.id as string,
      ...form,
    });
  };

  return (
    <Modal
      blur
      scroll
      aria-labelledby="modal-title"
      open={openModal}
      onClose={() => setOpenModal()}
      width="500px"
    >
      {createPost.isLoading ? (
        <>
          <Loading color={"white"} />
          please wait
        </>
      ) : (
        <>
          <Modal.Header>
            <SConfirmWrapper>
              <SConfirmTitle>Are you sure?</SConfirmTitle>
              <SConfirmText>
                Once you publish it, you will not be able to create a new post
                or edit the text of this post again.
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
              <Button flat color="success" onPress={submitPostCreate}>
                Yass 😍
              </Button>
            </SConfirmButtonsWrapper>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

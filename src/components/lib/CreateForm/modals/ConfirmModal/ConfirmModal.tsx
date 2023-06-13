import {
  SCenter,
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
  SLoadingSubmit,
} from "./SConfirmModal.styled";
import { api } from "@/utils/api";
import type { values } from "../../template";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Modal } from "@/components/shared/Modal";
import { Loading } from "@/components/shared/Loading";
import Image from "next/image";
import { Button } from "@/components/shared/Button";

type GifModalProps = {
  openModal: boolean;
  setOpenModal: () => void;
  form: typeof values;
  setSuccess: () => void;
};

export const ConfirmModal = ({
  openModal,
  setOpenModal,
  form,
  setSuccess,
}: GifModalProps) => {
  const createPost = api.createPost.useMutation();
  const { session } = useContext(AuthContext);

  if (!openModal) return null;

  const submitPostCreate = () => {
    createPost.mutate(
      {
        client_id: session?.user.id as string,
        ...form,
      },
      {
        onSuccess: () => {
          setSuccess();
        },
      }
    );
  };

  return (
    <Modal blur open={openModal} onClose={() => setOpenModal()} width={500}>
      {createPost.isLoading ? (
        <SLoadingSubmit>
          <Loading size="xl" color={"white"} />
          <p>Please wait</p>
        </SLoadingSubmit>
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
            <SCenter>
              <Image
                src={
                  "https://media.tenor.com/XQ0mT-V1n30AAAAC/are-you-sure-about-that-the-rock.gif"
                }
                alt="confirm image"
                style={{ borderRadius: "10px" }}
                width={400}
                height={400}
              />
            </SCenter>
          </Modal.Body>
          <Modal.Footer>
            <SConfirmButtonsWrapper>
              <Button
                onClick={setOpenModal}
                style={{
                  background: "#300313",
                  color: "#f4256d",
                }}
              >
                Nahh 💀
              </Button>
              <Button
                style={{
                  background: "#224124",
                  color: "#59ff64",
                }}
                onClick={submitPostCreate}
              >
                Yass 😍
              </Button>
            </SConfirmButtonsWrapper>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

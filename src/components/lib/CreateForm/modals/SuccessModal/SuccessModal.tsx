import Twemoji from "react-twemoji";
import Confetti from "react-confetti";
import { SSuccessCenter } from "./SSuccessModal.styled";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/shared/Modal";
import { Button } from "@/components/shared/Button";
import { SCenter } from "../ConfirmModal/SConfirmModal.styled";

export const SuccessModal = () => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  if (!isWindow) return null;

  return (
    <>
      <Confetti width={window?.innerWidth} height={window?.innerHeight} />
      <Modal aria-labelledby="modal-title" open width={500} preventClose>
        <Modal.Header>
          <SCenter>
            <Twemoji>🥳</Twemoji>
          </SCenter>
        </Modal.Header>
        <Modal.Body>
          <SSuccessCenter>Your post successfully published</SSuccessCenter>
        </Modal.Body>
        <Modal.Footer>
          <SSuccessCenter>
            <Link href="/" style={{
              
            }}>
              <Button
                style={{
                  width: "100%",
                  background: "#224124",
                  color: "#59ff64",
                }}
              >
                Show me
              </Button>
            </Link>
          </SSuccessCenter>
        </Modal.Footer>
      </Modal>
    </>
  );
};

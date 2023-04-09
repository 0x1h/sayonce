import { Button, Modal } from "@nextui-org/react";
import Twemoji from "react-twemoji";
import Confetti from "react-confetti";
import { SSuccessCenter } from "./SSuccessModal.styled";
import { useEffect, useState } from "react";
import Link from "next/link";

export const SuccessModal = () => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  if (!isWindow) return null;

  return (
    <>
      <Confetti width={window?.innerWidth} height={window?.innerHeight} />
      <Modal
        scroll
        aria-labelledby="modal-title"
        open
        width="500px"
        preventClose
      >
        <Modal.Header>
          <Twemoji>🥳</Twemoji>
        </Modal.Header>
        <Modal.Body>
          <SSuccessCenter>Your post successfully published</SSuccessCenter>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "block",
          }}
        >
          <SSuccessCenter>
            <Link href="/">
              <Button color={"success"} flat>
                Show me
              </Button>
            </Link>
          </SSuccessCenter>
        </Modal.Footer>
      </Modal>
    </>
  );
};

import { Button, Modal } from "@nextui-org/react";
import { SLimitWarnMessage } from "./SLimitWarn.styled";
import ReactLimit from "@/assets/GoodisReact.png";
import Image from "next/image";

type LimitWarnModal = {
  onClose: () => void;
};

export const LimitWarnModal = ({ onClose }: LimitWarnModal) => {
  return (
    <Modal
      onClose={onClose}
      scroll
      aria-labelledby="modal-title"
      open
      width="500px"
    >
      <Modal.Header>
        <Image
          src={ReactLimit}
          alt={"react limit image"}
          width={200}
          height={200}
        />
      </Modal.Header>
      <Modal.Body>
        <SLimitWarnMessage>
          The maximum number of reactions allowed on a post is 10.
        </SLimitWarnMessage>
      </Modal.Body>
      <Modal.Footer
        style={{
          display: "block",
        }}
      >
        <SLimitWarnMessage>
          <Button color={"primary"} flat onPress={onClose}>
            Okay
          </Button>
        </SLimitWarnMessage>
      </Modal.Footer>
    </Modal>
  );
};

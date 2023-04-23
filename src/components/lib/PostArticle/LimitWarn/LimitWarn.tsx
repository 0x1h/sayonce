import { SLimitWarnMessage } from "./SLimitWarn.styled";
import ReactLimit from "@/assets/GoodisReact.png";
import { Button } from "@/components/shared/Button";
import { Modal } from "@/components/shared/Modal";
import Image from "next/image";

type LimitWarnModal = {
  onClose: () => void;
};

export const LimitWarnModal = ({ onClose }: LimitWarnModal) => {
  return (
    <Modal onClose={onClose} aria-labelledby="modal-title" open width={500}>
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
      <Modal.Footer>
        <SLimitWarnMessage>
          <Button flat onClick={onClose}>
            Okay
          </Button>
        </SLimitWarnMessage>
      </Modal.Footer>
    </Modal>
  );
};

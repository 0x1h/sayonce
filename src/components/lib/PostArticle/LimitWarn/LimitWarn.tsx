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
        <div className="flex items-center justify-center">
          <Image
            src={ReactLimit}
            alt={"react limit image"}
            width={200}
            height={200}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <SLimitWarnMessage>
          The maximum number of reactions allowed on a post is 10.
        </SLimitWarnMessage>
      </Modal.Body>
      <Modal.Footer>
        <SLimitWarnMessage>
          <Button style={{width: "100%"}} flat onClick={onClose}>
            Okay
          </Button>
        </SLimitWarnMessage>
      </Modal.Footer>
    </Modal>
  );
};

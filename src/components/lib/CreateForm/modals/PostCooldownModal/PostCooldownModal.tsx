import { Button, Image, Modal, Tooltip } from "@nextui-org/react";
import {
  SConfirmButtonsWrapper,
  SConfirmText,
  SConfirmTitle,
  SConfirmWrapper,
  SCoolDownFree,
} from "./SAlreadyPostedModal.styled";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { addNextDay } from "./utils/addNextDay";
dayjs.extend(relativeTime);

type PostCooldownModalProps = {
  date: string;
};

export const PostCooldownModal = ({ date }: PostCooldownModalProps) => {
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
          <SConfirmTitle>Post Cooldown</SConfirmTitle>
          <SConfirmText>
            You can only post once per day. You will be able to post again
            <SCoolDownFree>
              {dayjs(addNextDay(new Date(date))).fromNow()}
            </SCoolDownFree>
          </SConfirmText>
        </SConfirmWrapper>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={
            "https://media.tenor.com/tgcRIPI6pmAAAAAC/mr-bean-mr-bean-holiday.gif"
          }
          alt="confirm image"
          style={{ borderRadius: "10px" }}
          width={"300px"}
        />
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Link href="/" shallow>
            <Button flat>Bruh 💀</Button>
          </Link>
        </SConfirmButtonsWrapper>
      </Modal.Footer>
    </Modal>
  );
};

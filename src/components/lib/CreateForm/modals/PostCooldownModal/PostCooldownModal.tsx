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
import { Modal } from "@/components/shared/Modal";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { SCenter } from "../ConfirmModal/SConfirmModal.styled";
dayjs.extend(relativeTime);

type PostCooldownModalProps = {
  date: string;
};

export const PostCooldownModal = ({ date }: PostCooldownModalProps) => {
  return (
    <Modal blur preventClose open width={500}>
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
        <SCenter>
          <Image
            src={
              "https://media.tenor.com/tgcRIPI6pmAAAAAC/mr-bean-mr-bean-holiday.gif"
            }
            alt="confirm image"
            style={{ borderRadius: "10px" }}
            width={300}
            height={300}
          />
        </SCenter>
      </Modal.Body>
      <Modal.Footer>
        <SConfirmButtonsWrapper>
          <Link
            href="/"
            shallow
            style={{
              width: "100%",
            }}
          >
            <Button
              style={{
                width: "100%",
              }}
              flat
            >
              Bruh 💀
            </Button>
          </Link>
        </SConfirmButtonsWrapper>
      </Modal.Footer>
    </Modal>
  );
};

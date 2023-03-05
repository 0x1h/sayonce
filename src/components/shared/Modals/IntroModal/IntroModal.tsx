import { GlobalModalsContext } from "@/contexts/GlobalModalsContext";
import { Button, Checkbox, Modal, Spacer, Text } from "@nextui-org/react";
import { useContext } from "react";
import { useIntroModal } from "./hooks/useIntroModal";
import {
  SIntroImageWrapper,
  SIntroModalH1,
  SintroModalH4,
  SIntroModalImage,
  SintroModalP,
} from "./SIntroModal.styled";

export const IntroModal = () => {
  const { introModalOpen } = useContext(GlobalModalsContext);
  const { closeHandler, earlyClose, setAgreed } = useIntroModal();

  return (
    <Modal
      preventClose
      blur
      aria-labelledby="modal-title"
      open={introModalOpen}
      scroll
      width="800px"
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome on
          <Text b size={18} style={{ paddingLeft: "8px" }}>
            Sayonce 💅🏼🙄
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body id="modal-body-ref">
        <Text>
          <SIntroModalH1>Hey 👋🏻</SIntroModalH1>
          <SintroModalH4>
            before moving forward you must know what happens here, because I do
            lots of dark stuff here that you won&apos;t like i guess, I sell
            your personal data on dark web, okay jk 💀.
          </SintroModalH4>
          <Spacer />
          <SintroModalH4>
            please take a time and read all these, to understand what this
            platform uses for better experience
            <Spacer />
            <ul>
              <li>
                • I use cookies on this website to store user token, which
                allow us to keep you logged in and provide you with a better
                browsing experience. Cookies are small text files that are
                stored on your device when you visit our site. They help us
                remember your preferences and keep you authenticated
              </li>
              <li>• I use your Discord account for authorization</li>
              <li>
                • I also track your IP address. Why? Because this project is
                called &quot;SayOnce&quot;, which means that you can only post
                here once and never again. That&apos;s the whole point.
                Therefore, we want you to follow this rule and say something
                only once. Your IP address will help us ensure that you comply
                with this rule and do not deceive us.
              </li>
              <li>
                • When you post here, we save your data
                <SintroModalP>
                  - Your Discord ID, username and avatar
                </SintroModalP>
                <SintroModalP>- Your IP address</SintroModalP>
                <SintroModalP>- Date when you posted</SintroModalP>
                <SintroModalP>
                  - All the content what you mentioned in post
                </SintroModalP>
              </li>
            </ul>
          </SintroModalH4>
          <Spacer />
          <SintroModalH4>
            If you have read all of this information and are ready to take a
            risk and try out this platform, please click the checkbox below.
          </SintroModalH4>
          <Spacer />
          <SIntroImageWrapper>
            <SIntroModalImage
              alt={"pointing gun"}
              src={
                "https://i.kym-cdn.com/photos/images/newsfeed/002/337/829/005.gif"
              }
            />
          </SIntroImageWrapper>
        </Text>
        <div>
          <Checkbox onChange={() => setAgreed((prev) => !prev)}>
            <Text size={14}>Okay, okay got it 😭</Text>
          </Checkbox>
          {earlyClose && <Text size={14}>👆 Hey kiddo you forgot this</Text>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onPress={closeHandler}>Leave me alone</Button>
      </Modal.Footer>
    </Modal>
  );
};

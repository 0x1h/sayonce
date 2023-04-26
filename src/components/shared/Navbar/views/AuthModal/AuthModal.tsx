import { Avatar } from "@/components/shared/Avatar";
import { Button } from "@/components/shared/Button";
import { Modal } from "@/components/shared/Modal";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FaDiscord } from "react-icons/fa";

export const AuthModal = ({
  session,
  close,
}: {
  session?: Session;
  close: () => void;
}) => {
  return (
    <Modal open blur onClose={close} width={400}>
      <Modal.Header>
        <div className="flex items-center justify-center text-center font-extrabold">
          {session?.user ? "Wanna Log out? 😭" : "Wanna Authorize?"}
        </div>
      </Modal.Header>
      {session?.user ? (
        <Modal.Body>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Avatar src={session?.user.image} />
            <p className="cursor-default">{session?.user.name}</p>
            <p
              className="ml-4 cursor-pointer text-red-500 hover:underline"
              // eslint-disable-next-line
              onClick={() => signOut()}
            >
              Log out
            </p>
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <div className="mt-5 flex w-full items-center justify-center">
            <Button
              style={{ padding: "10px", display: "flex", gap: "8px" }}
              // eslint-disable-next-line
              onClick={() => signIn("discord")}
            >
              <FaDiscord size={20} />
              <p>Authorize With Discord</p>
            </Button>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <div className="mt-6 flex w-full items-center justify-center">
          <Button flat onClick={close}>
            Nevermind
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

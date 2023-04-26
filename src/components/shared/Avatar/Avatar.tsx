import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

export type AvatarProps = {
  src?: string | null;
  alt?: string | null;
  width?: number | `${number}`;
  height?: number | `${number}`;
  lazy?: boolean;
  onClick?: () => void;
};

export const Avatar = ({
  alt,
  src,
  width,
  height,
  lazy,
  onClick,
}: AvatarProps) => {
  return (
    <div
      className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full border-2 border-solid border-blue p-0.5"
      onClick={onClick}
    >
      {src ? (
        <Image
          className="rounded-full"
          style={{
            objectFit: "cover",
          }}
          width={width || 100}
          height={height || 100}
          src={src || ""}
          alt={alt || "user profile"}
          loading={lazy ? "lazy" : "eager"}
        />
      ) : (
        <AiOutlineUser size={20} color="#0070f1" />
      )}
    </div>
  );
};

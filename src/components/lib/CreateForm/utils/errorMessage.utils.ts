export const errorMessage = ({
  submited,
  text,
}: {
  submited: boolean;
  text: string;
}) => {
  if (text && submited) {
    return text;
  }
};

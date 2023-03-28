import { object, string } from "yup";

export const formValidation = object({
  title: string().required("Name Should Not Be Empty"),
  description: string().required("Description Should Not Be Empty").min(10, "Minimum 10 length characters"),
  gif: string().required("Upload GIF")
});

/* eslint-disable */
import { useEffect, useState } from "react";
import { formValidation } from "../validation";
import { values as formTemplate} from "../template";

export type ErrorSchemaType = {
  [key in keyof typeof formTemplate]?: string;
} & {
  [key: string]: string;
};


export const useValidate = (values: typeof formTemplate) => {
  const [errors, setErrors] = useState<ErrorSchemaType>({});

  useEffect(() => {
    formValidation
      .validate(values, {
        abortEarly: false,
      })
      .then(() => {
        setErrors({});
      })
      .catch((err) => {
        const newErrors: any = {};
        err.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });

        setErrors(newErrors);
      });
  }, [values]);

  return {errors}
}
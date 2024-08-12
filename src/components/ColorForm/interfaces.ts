import { FormEvent } from "react";

export interface IColorFormProps {
  handleSubmitColor: (e: FormEvent<HTMLFormElement>, color: string) => void;
}
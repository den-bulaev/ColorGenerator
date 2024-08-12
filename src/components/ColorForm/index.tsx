import { ChangeEvent, FormEvent, useState } from "react";
import { IColorFormProps } from "./interfaces";

const ColorForm: React.FC<IColorFormProps> = ({ handleSubmitColor }) => {
  const [color, setColor] = useState("#ff00bb");

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleChangeColorText = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <form
      className="color-form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmitColor(e, color)}
    >
      <input
        type="color"
        name="color"
        id="color"
        value={color}
        onChange={handleChangeColor}
      />
      <input
        type="text"
        name="colorText"
        id="colorText"
        value={color}
        onChange={handleChangeColorText}
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ColorForm;

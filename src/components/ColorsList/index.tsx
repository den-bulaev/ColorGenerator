import { v4 as uuid } from "uuid";

import { IColorListProps } from "./interfaces";
import SingleColor from "../SingleColor";

const ColorsList: React.FC<IColorListProps> = ({ colors }) => {

  return (
    <ul className="colors">
      {colors.map((color) => {
        return <SingleColor color={color} key={uuid()} />;
      })}
    </ul>
  );
};

export default ColorsList;

import { CSSProperties } from "react";
import Values from "values.js";
import { toast } from "react-toastify";

const SingleColor: React.FC<{ color: Values }> = ({ color }) => {
  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Color successfully copied!");
    } catch {
      toast.error("Failed to copy color: ");
    }
  }

  const generateStyles = (colorData: Values): CSSProperties => {
    return {
      backgroundColor: `#${colorData.hex}`,
    };
  };

  return (
    <li
      style={generateStyles(color)}
      className={`color${color.type === "shade" ? " color-light" : ""}`}
      onClick={() => copyToClipboard(`#${color.hex}`)}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{`#${color.hex}`}</p>
    </li>
  );
};

export default SingleColor;

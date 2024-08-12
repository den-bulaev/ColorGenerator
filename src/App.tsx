import { FormEvent, useEffect, useState } from "react";

import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

import ColorForm from "./components/ColorForm";
import ColorsList from "./components/ColorsList";

function App() {
  const [colors, setColors] = useState<Values[]>([]);
  const [isValidationFailed, setIsValidationFailed] = useState(false);

  useEffect(() => {
    if (isValidationFailed) {
      toast.error("Please use valid format: #rrggbb");
    }

    setIsValidationFailed(false);
  }, [isValidationFailed]);

  const colorValidation = new RegExp(/^#[\d\w]{6}/);

  const handleSubmitColor = (e: FormEvent<HTMLFormElement>, color: string) => {
    e.preventDefault();

    if (!colorValidation.test(color)) {
      setIsValidationFailed(true);
      return;
    }

    const values: Values[] = new Values(color).all(10);
    setColors(values);
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <ColorForm handleSubmitColor={handleSubmitColor} />
      </section>

      <section>
        <ColorsList colors={colors} />
      </section>

      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;

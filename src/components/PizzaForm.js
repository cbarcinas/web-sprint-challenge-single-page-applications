import React, { useState } from "react";
import * as yup from "yup";

// form validation
const formSchema = yup.object().shape({
  name: yup.string().required(),
  size: yup.string().required(),
  pepperoni: yup.boolean().defined(),
  sasuage: yup.boolean().defined(),
  bacon: yup.boolean().defined(),
  ham: yup.boolean().defined(),
  special: yup.string().notRequired(),
});

const PizzaForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sasuage: false,
    bacon: false,
    ham: false,
    special: "",
  });

  return (
    <>
      <h1>Build Your Pizza</h1>
      <div>
        <form>
          <div>
            <h2>Choose Size :</h2>
            <select>
              <option value="" selected>
                - Select -
              </option>
              <option value="small">Small (10 in)</option>
              <option value="medium">Medium (12 in)</option>
              <option value="large">Large (14 in)</option>
              <option value="x-large">X-large (18 in)</option>
            </select>
          </div>

          <div>
            <h2>Choose Sauce :</h2>
            <label htmlFor="pepperoni">
              <input
                type="checkbox"
                name="pepperoni"
                id="pepperoniCheckBox"
                //   checked={formState.pepperoni}
                //   onChange={inputChange}
              />
              Pepperoni
            </label>

            <label htmlFor="sasuage">
              <input
                type="checkbox"
                name="Sasuage"
                id="SasuageCheckBox"
                //   checked={formState.sasuage}
                //   onChange={inputChange}
              />
              Sasuage
            </label>

            <label htmlFor="bacon">
              <input
                type="checkbox"
                name="bacon"
                id="baconCheckBox"
                //   checked={formState.bacon}
                //   onChange={inputChange}
              />
              Bacon
            </label>

            <label htmlFor="ham">
              <input
                type="checkbox"
                name="ham"
                id="hamCheckBox"
                //   checked={formState.ham}
                //   onChange={inputChange}
              />
              Ham
            </label>

            <label htmlFor="Special Instructions">
              <h3>Any special instructions?</h3>
              <br />
              <textarea
                name="special"
                id="special"
                placeholder="specify instructions here..."
                //   value={formState.special}
                //   onChange={inputChange}
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default PizzaForm;

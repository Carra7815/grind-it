import { Button } from "react-aria-components";
import PropTypes from "prop-types";
import arithmatic from "../scripts/arithmatic";
import { useState } from "react";

function NumInput({ min, max, value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if (
      newValue === "" ||
      (Number(newValue) >= min && Number(newValue) <= max)
    ) {
      setInputValue(newValue);
      onChange && onChange(newValue);
    }
  };

  return (
    <input type="text" value={inputValue} onChange={handleInputChange}></input>
  );
}

NumInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Index({ addItem }) {
  // Function to replace certain patterns with JSX
  const processText = (str) => {
    const pattern = /React/g; // Pattern to match
    return str
      .split(pattern)
      .flatMap((part, index) =>
        index < str.split(pattern).length - 1
          ? [part, <strong key={index}>React</strong>]
          : [part],
      );
  };

  return (
    <div>
      <ul className="space-y-4">
        {arithmatic.map((operation) => (
          <li key={operation.id} className="rounded bg-secondary p-4 shadow">
            <h1 className="mb-2 font-semibold">{operation.name}</h1>
            <p>{processText(operation.description)}</p>
            <Button
              className="rounded-lg bg-tertiary px-6 py-1"
              onPress={() => addItem(operation)}
            >
              Add
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Index.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Index;

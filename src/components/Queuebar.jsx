import { Button } from "react-aria-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import arithmatic from "../scripts/arithmatic";

function Queuebar({ queue, removeItem }) {
  return (
    <nav className="flex h-screen w-60 flex-row rounded-lg bg-tertiary">
      <div className="my-10 w-1 rounded bg-quaternary" />
      <div className="flex w-full flex-col items-center p-3">
        <h1 className="select-none">Queue</h1>
        <ul className="w-full space-y-4">
          {queue.map((operation, index) => (
            <li
              key={index}
              className="flex w-full flex-row rounded bg-secondary p-2 shadow"
            >
              <h2 className="m-0 mr-2 font-semibold">{operation.name}</h2>
              <Button
                className="ml-auto text-sm"
                onPress={() => removeItem(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Queuebar.propTypes = {
  queue: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Queuebar;

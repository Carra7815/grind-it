import { Button } from "react-aria-components";
import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="my-24 flex flex-col items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        className="h-10 w-36 rounded bg-tertiary hover:bg-secondary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
    </div>
  );
}

export default Error;

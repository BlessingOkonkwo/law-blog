import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "react-router";
import Button from "../shared/controls/button";
import { useNavigate } from "react-router-dom";

const ErrorTemplate = () => {
  const navigate = useNavigate();
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  console.error(error);
  return (
    <div className="space-y-10 w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-[#818181]">
        <i>{error.statusText}</i>
      </p>

      <Button
        variant="transparent"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default ErrorTemplate;

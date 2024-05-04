import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "react-router";

export default function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  console.error(error);

  return (
    <div className="space-y-10 w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-[#818181]">
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}

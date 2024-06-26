import { ErrorMessage } from "@hookform/error-message";

// A simple component to render associated input's error message.

interface IInputErrorMessage {
  errors?: any;
  name: string;
}

const InputErrorMessage = ({ errors, name }: IInputErrorMessage) => (
  <ErrorMessage
    errors={errors}
    name={name}
    as={<p className="text-red-500 text-xs font-medium" />}
  >
    {({ messages }: Record<string, string>) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <p key={type}>{message}</p>
      ))
    }
  </ErrorMessage>
);

export default InputErrorMessage;

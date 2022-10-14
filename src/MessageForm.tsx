import { FC, useRef } from "react";

interface MessageFormProps {
  newMessage: string;
  setNewMessage: (newMessage: string) => void;
  handleSubmit: () => void;
}

const MessageForm: FC<MessageFormProps> = ({
  newMessage,
  setNewMessage,
  handleSubmit,
}) => {
  const inputRef = useRef<any>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
    inputRef.current.focus();
  };

  return (
    <form className="messageForm" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="messageForm">your message</label>
      <input
        autoFocus
        ref={inputRef}
        id="messageForm"
        type="text"
        placeholder="your message"
        required
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
    </form>
  );
};

export default MessageForm;

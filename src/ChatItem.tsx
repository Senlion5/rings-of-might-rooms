import { forwardRef } from "react";
import { MessageProps } from "./types/AppTypes";

interface ChatItemProps {
  message: MessageProps;
}

const ChatItem = forwardRef(
  (
    { message }: ChatItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const convertedTime = new Date(message.time).toLocaleString();

    return (
      <li>
        <div ref={ref} className="chatItemBox">
          <div className="authorLine">
            <img
              src={process.env.PUBLIC_URL + message.avatar}
              alt="user's avatar"
            />
            <span className="authorText">{message.username}</span>
            <span className="timeText">{convertedTime}</span>
          </div>
          <div>
            <span className="chatText">{message.text}</span>
          </div>
        </div>
      </li>
    );
  }
);

export default ChatItem;

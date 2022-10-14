import { forwardRef } from "react";
import ChatItem from "./ChatItem";
import { MessageProps } from "./types/AppTypes";

interface FeedProps {
  messages: Array<MessageProps>;
}

const Feed = forwardRef(
  (
    { messages }: FeedProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <>
        {messages.map((message) => (
          <ChatItem ref={ref} key={message.id} message={message} />
        ))}
      </>
    );
  }
);

export default Feed;

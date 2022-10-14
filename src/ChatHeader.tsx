import { FC } from "react";
import { FaUser } from "react-icons/fa";

interface ChatHeaderProps {
  chatUser: string;
  roomUsers: number;
}

const ChatHeader: FC<ChatHeaderProps> = ({ chatUser, roomUsers }) => {
  return (
    <div className="chatHeader">
      {chatUser && (
        <span>
          <span className="chatHeaderTextUser">{chatUser}</span>
          <span className="chatHeaderText"> is here!</span>
        </span>
      )}
      <FaUser
        className="chatHeaderIcon"
        style={{ width: 16, color: "rgb(169, 80, 177)" }}
      />
      <span className="chatUsers">{roomUsers}</span>
    </div>
  );
};

export default ChatHeader;

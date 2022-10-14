import { FC, useState } from "react";
import { RoomProps } from "./types/AppTypes";

export interface RoomsItemProps {
  room: RoomProps;
  chosenRoom?: string;
  joinRoom: (roomName: string) => void;
}

const RoomsItem: FC<RoomsItemProps> = ({
  room,
  chosenRoom,
  joinRoom,
}): JSX.Element => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <li>
      <div
        className="roomsItemBox"
        onClick={() => {
          joinRoom(room.roomTitle);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={process.env.PUBLIC_URL + room.roomImage} alt="Room" />
        <span
          className="roomsText"
          style={Object.assign(
            { textDecoration: isHovering ? "underline" : "" },
            room.roomTitle === chosenRoom ? { fontWeight: "bold" } : {},
            room.roomTitle === chosenRoom
              ? { color: "rgb(30, 80, 155)" }
              : { color: "gray" }
          )}
        >
          {room.roomTitle}
        </span>
      </div>
    </li>
  );
};

export default RoomsItem;

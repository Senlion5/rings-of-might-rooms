import RoomsItem from "./RoomsItem";
import { useState, useContext } from "react";
import SocketDataContext from "./context/SocketDataContext";
import { SocketDataContextProps, RoomProps } from "./types/AppTypes";

const Rooms = (): JSX.Element => {
  const [rooms, setRooms] = useState<Array<RoomProps>>([]);
  const [chosenRoom, setChosenRoom] = useState<string>("");

  const { raceSocket } = useContext<SocketDataContextProps>(SocketDataContext);

  raceSocket?.on("raceRooms", (roomsList: Array<RoomProps>) => {
    setRooms(roomsList);
    if (roomsList.map((room) => room.roomTitle === chosenRoom)) {
      setChosenRoom(roomsList[0].roomTitle);
    }
  });

  raceSocket?.emit("joinRoom", chosenRoom, (newNumberOfMembers: number) => {
    // console.log("Number of Chat Users", newNumberOfMembers);
  });

  const joinRoom = (roomName: string) => {
    setChosenRoom(roomName);
  };

  return (
    <div className="roomsColumn">
      {Array.isArray(rooms) && joinRoom
        ? rooms.map((room: RoomProps) => (
            <RoomsItem
              key={room.roomId}
              room={room}
              chosenRoom={chosenRoom}
              joinRoom={joinRoom}
            />
          ))
        : null}
    </div>
  );
};

export default Rooms;

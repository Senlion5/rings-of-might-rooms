import { Socket } from "socket.io-client";

export interface SocketDataContextProps {
  raceSocket?: Socket | undefined;
  raceEndpoint?: string;
  races?: Array<RaceProps>;
  joinRace?: (endpoint: string) => void;
  // rooms?: Array<RoomProps>;
  // joinRoom?: (roomTitle: string) => void;
  // chosenRoom?: string;
  // roomUsers?: number;
  // chatMessages?: Array<MessageProps>;
  // handleSubmit?: () => void;
  // chatUser?: string;
  // newMessage?: string;
  // setNewMessage?: (newMessage: string) => void;
  // setRooms?: (roomsList: Array<RoomProps>) => void | undefined;
  // setChosenRoom?: (roomTitle: string) => void;
}

export interface RaceProps {
  id: number;
  image: string;
  endpoint: string;
  raceTitle?: string;
  rooms?: [];
}

export interface RoomProps {
  roomId: number;
  roomTitle: string;
  roomImage: string;
  namespace?: string;
  privateRoom: boolean;
  history?: [];
}

export interface MessageProps {
  id?: number | string;
  text: string;
  time: string;
  username: string;
  avatar: string;
}

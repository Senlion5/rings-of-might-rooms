import { Socket } from "socket.io-client";

export interface SocketDataContextProps {
  raceSocket?: Socket | undefined;
  raceEndpoint?: string;
  races?: Array<RaceProps>;
  joinRace?: (endpoint: string) => void;
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

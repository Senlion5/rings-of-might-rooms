import { FC, createContext, useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { serverPort, extraHeaders } from "../config/config";
import { SocketDataContextProps, RaceProps } from "../types/AppTypes";

interface ContextProps {
  children: any;
}

// README.md --> read about the sockets architecture solution !!!

const SocketDataContext = createContext<SocketDataContextProps>({
  raceSocket: undefined,
  raceEndpoint: "",
  races: [],
  joinRace: (endpoint: string) => "",
});

let username = prompt("What is your nickname for the ROM chats?");
if (!username) username = "Anonymous User";

export const SocketDataProvider: FC<ContextProps> = ({ children }) => {
  const [raceEndpoint, setRaceEndpoint] = useState<string>("");
  const [races, setRaces] = useState<Array<RaceProps>>([]);

  let { current: socket } = useRef(
    io(serverPort, {
      extraHeaders,
    })
  );

  useEffect(() => {
    socket.connect();
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  if (!raceEndpoint) setRaceEndpoint("/dwarfs");

  socket.on("racesList", (racesList: Array<RaceProps>) => {
    setRaces(racesList);
  });

  let raceSocket = io(`${serverPort}${raceEndpoint}`, {
    extraHeaders,
    query: { username },
  });

  useEffect(() => {
    raceSocket.connect();
    return () => {
      if (raceSocket) {
        raceSocket.close();
      }
    };
  }, [raceSocket]);

  const joinRace = (endpoint: string) => {
    setRaceEndpoint(endpoint);
  };

  return (
    <SocketDataContext.Provider
      value={{
        raceSocket,
        raceEndpoint,
        races,
        joinRace,
      }}
    >
      {children}
    </SocketDataContext.Provider>
  );
};

export default SocketDataContext;

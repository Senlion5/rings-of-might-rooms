import RacesItem from "./RacesItem";
import { useContext } from "react";
import SocketDataContext from "./context/SocketDataContext";
import { SocketDataContextProps, RaceProps } from "./types/AppTypes";

const Races = (): JSX.Element => {
  const { raceEndpoint, races, joinRace } =
    useContext<SocketDataContextProps>(SocketDataContext);

  return (
    <div className="racesColumn">
      {Array.isArray(races) && joinRace
        ? races.map((race: RaceProps) => (
            <RacesItem
              key={race.id}
              race={race}
              joinRace={joinRace}
              chosenRace={raceEndpoint}
            />
          ))
        : null}
    </div>
  );
};

export default Races;

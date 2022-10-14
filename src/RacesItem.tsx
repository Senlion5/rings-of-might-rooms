import { FC } from "react";
import { RaceProps } from "./types/AppTypes";

export interface RacesItemProps {
  race: RaceProps;
  chosenRace?: string;
  joinRace: (endpoint: string) => void;
}

const RacesItem: FC<RacesItemProps> = ({
  race,
  chosenRace,
  joinRace,
}): JSX.Element => {
  return (
    <li>
      {race && (
        <img
          style={{
            border: race.endpoint === chosenRace ? "4px solid #ccd8ee" : "",
          }}
          src={process.env.PUBLIC_URL + race.image}
          onClick={() => joinRace(race.endpoint)}
          alt="Race"
        />
      )}
    </li>
  );
};

export default RacesItem;

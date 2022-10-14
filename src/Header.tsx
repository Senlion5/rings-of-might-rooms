import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className="Header">
      <h2>The Rings of Might</h2>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;

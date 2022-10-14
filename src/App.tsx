import Header from "./Header";
import Races from "./Races";
import Rooms from "./Rooms";
import Chat from "./Chat";
import { SocketDataProvider } from "./context/SocketDataContext";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="namespaces">
        <SocketDataProvider>
          <Races />
          <Rooms />
          <Chat />
        </SocketDataProvider>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
import SearchForm from "./SearchForm";
import Feed from "./Feed";
import { useContext } from "react";
import SocketDataContext from "./context/SocketDataContext";
import { SocketDataContextProps } from "./types/AppTypes";
import { MessageProps } from "./types/AppTypes";

const Chat = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<MessageProps>>([]);
  const [roomUsers, setRoomUsers] = useState<number>(0);
  const [chatMessages, setChatMessages] = useState<Array<MessageProps>>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [chatUser, setChatUser] = useState<string>("");

  const { raceSocket } = useContext<SocketDataContextProps>(SocketDataContext);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatMessages) {
      const filteredResults: Array<MessageProps> = chatMessages.filter(
        (msg: MessageProps) =>
          msg.text.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [chatMessages, search]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" } as {});
  }, [searchResults]);

  raceSocket?.on("updateMembers", (numberOfChatUsers: number) => {
    setRoomUsers(numberOfChatUsers);
  });

  raceSocket?.on("historyCatchUp", (chatHistory: Array<MessageProps> | []) => {
    setChatMessages(chatHistory);
  });

  raceSocket?.on("messageToClients", (fullMessage: MessageProps) => {
    setChatMessages([...chatMessages, fullMessage]);
  });

  raceSocket?.on("user", (user: string) => {
    setChatUser(user);
  });

  const handleSubmit = () => {
    raceSocket?.emit("newMessageToServer", { text: newMessage });
    setNewMessage("");
  };

  return (
    <div className="chatColumn">
      <ChatHeader chatUser={chatUser} roomUsers={roomUsers} />
      <SearchForm search={search} setSearch={setSearch} />
      <main className="Home">
        {searchResults.length ? (
          <Feed ref={scrollRef} messages={searchResults} />
        ) : (
          <p className="noText">No messages to display</p>
        )}
      </main>
      <MessageForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  const projectId = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={projectId}
        username={props.user.username} // Fixed casing (Username -> username)
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatPage;

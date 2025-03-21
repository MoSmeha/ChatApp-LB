import useGetConversations from "../../hooks/useGetConversations";

import Conversation from "./Conversation";
import "./Sidebar.css";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="conversations-container">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading-spinner"></span> : null}
    </div>
  );
};
export default Conversations;

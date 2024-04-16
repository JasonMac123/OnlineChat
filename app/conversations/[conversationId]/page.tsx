import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";

import { EmptyState } from "@/components/empty-state";
import { Header } from "./components/header";
import { ChatMessages } from "./components/chat-messages";
import { ChatBox } from "./components/chat-box";

interface ConversationPageParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: ConversationPageParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <ChatMessages />
        <ChatBox />
      </div>
    </div>
  );
};

export default ConversationId;

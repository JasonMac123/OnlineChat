import getConversations from "../actions/getConversations";

import { SideBar } from "@/components/sidebar/side-bar";
import { ConversationList } from "./components/conversation-list";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await getConversations();

  return (
    <SideBar>
      <div className="h-full">
        <ConversationList items={conversations} />
        {children}
      </div>
    </SideBar>
  );
}

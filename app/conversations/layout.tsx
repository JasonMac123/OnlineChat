import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

import { SideBar } from "@/components/sidebar/side-bar";
import { ConversationList } from "./components/conversation-list";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers();
  const conversations = await getConversations();

  return (
    <SideBar>
      <div className="h-full">
        <ConversationList items={conversations} users={users} />
        {children}
      </div>
    </SideBar>
  );
}

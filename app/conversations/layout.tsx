import { SideBar } from "@/components/sidebar/side-bar";
import { ConversationList } from "./components/conversation-list";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SideBar>
      <div className="h-full">
        <ConversationList items={[]} />
        {children}
      </div>
    </SideBar>
  );
}

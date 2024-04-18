import getUsers from "../actions/getUsers";

import { SideBar } from "@/components/sidebar/side-bar";
import { UserList } from "./components/user-list";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <SideBar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </SideBar>
  );
};

export default UsersLayout;

import getUsers from "../actions/getUsers";

import { SideBar } from "@/components/sidebar/side-bar";
import { UserList } from "./components/user-list";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <SideBar>
      <UserList users={users}/>
      <div className="h-full">{children}</div>;
    </SideBar>
  );
};

export default UsersLayout;

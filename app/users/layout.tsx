import { SideBar } from "@/components/sidebar/side-bar";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SideBar>
      <div className="h-full">{children}</div>;
    </SideBar>
  );
};

export default UsersLayout;

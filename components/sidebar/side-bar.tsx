import getCurrentUser from "@/app/actions/getCurrentUser";
import { DesktopSideBar } from "./desktop-sidebar";
import { MobileFooter } from "./mobile-footer";

export const SideBar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <MobileFooter currentUser={currentUser} />
      <DesktopSideBar currentUser={currentUser} />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

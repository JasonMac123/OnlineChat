import { DesktopSideBar } from "./desktop-sidebar";
import { MobileFooter } from "./mobile-footer";

export const SideBar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <MobileFooter />
      <DesktopSideBar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

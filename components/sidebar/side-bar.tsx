import { DesktopSideBar } from "./desktop-sidebar";
import { MobileSideBar } from "./mobile-sidebar";

export async function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <MobileSideBar />
      <DesktopSideBar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

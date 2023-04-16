import AuthNavbar from "@components/navbar/AuthNavbar";
import Logo from "@components/navbar/Logo";
import Sidebar from "@components/Sidebar";

export const metadata = {
  title: "CoinSynch Dashboard",
  description: "The best place to manage your crypto!",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNavbar />

      <div className="relative">
        <div className="flex min-h-screen lg:min-h-max">
          <Sidebar />
          {children}
        </div>
        <footer className="shadow-trade">
          <div className="flex items-center justify-center py-6 sm:justify-between sm:px-12 lg:justify-center lg:px-0">
            <label>Copyright © 2022 - All rights reserved</label>
            <div className="hidden sm:block lg:hidden">
              <Logo />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

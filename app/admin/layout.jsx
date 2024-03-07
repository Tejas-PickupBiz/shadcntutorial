import Navbar from "@/components/navbar";
import SideBar from "@/components/navbar/SideBar";

export const metadata = {
  title: "Admin Dashboard",
  description: "A demo app made using nextjs for shadCn tutorial",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <main className="w-full grid grid-cols-12  ">
        <aside className="col-span-3 xl:col-span-2 hidden md:block ">
          <SideBar />
        </aside>
        <nav className="  col-span-12 md:col-span-9 xl:col-span-10  ">
          <Navbar />
          <main className="bg-blue-800 p-10 ">{children}</main>
        </nav>
      </main>
    </main>
  );
}

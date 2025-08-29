import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName : 'Jordan', lastName: 'Doe'};
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 sm:p-8 shadow-[8px_10px_16px_0px_rgba(0,0,0,0.05)] md:hidden">
          <Image src='/icons/logo.svg' alt='logo' width={30} height={30}/>
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
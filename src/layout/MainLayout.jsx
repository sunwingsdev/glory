import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import SidebarMenu from "@/components/home/menu/SidebarMenu";
import BottomNavMobile from "@/components/shared/BottomNavMobile/BottomNavMobile";

const MainLayout = () => {
  const [showDepositModal, setShowDepositModal] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024; // Desktop: open by default
    }
    return true;
  });

  // Resize listener: desktop => open, mobile => closed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar
        onMenuClick={toggleSidebar}
        isSidebarOpen={sidebarOpen}
        showDepositModal={showDepositModal}
        setShowDepositModal={setShowDepositModal}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        {sidebarOpen && window.innerWidth >= 1024 && (
          <div className="lg:block hidden pt-[90px] px-2 pb-32 min-w-[200px] h-screen sticky top-0 overflow-y-auto hide-scrollbar bg-[#EEF0F8]">
            <SidebarMenu />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 pt-[70px] md:pt-[80px] lg:pt-[90px] lg:w-[83px] xl:w-[86%] w-full">
          <Outlet />
          <Footer />
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <BottomNavMobile
        showDepositModal={showDepositModal}
        setShowDepositModal={setShowDepositModal}
      />
    </div>
  );
};

export default MainLayout;

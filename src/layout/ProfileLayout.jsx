import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import SidebarMenu from "@/components/home/menu/SidebarMenu";
import BottomNavMobile from "@/components/shared/BottomNavMobile/BottomNavMobile";
import MyProfileSidebar from "@/components/myprofile/MyProfileSidebar";

const ProfileLayout = () => {
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

  // Lock scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar onMenuClick={toggleSidebar} isSidebarOpen={sidebarOpen} />

      {/* Blur overlay when mobile sidebar is open */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        {sidebarOpen && window.innerWidth > 1024 && (
          <div
            className={`lg:block hidden pt-[90px] px-2 pb-32 min-w-[200px] h-screen sticky top-0 overflow-y-auto hide-scrollbar bg-[#EEF0F8] ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <MyProfileSidebar />
          </div>
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed z-40 pt-16 px-2 pb-32 w-60 h-screen overflow-y-auto hide-scrollbar bg-[#EEF0F8] transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <SidebarMenu />
        </div>

        {/* Main Content */}
        <div className="flex-1 pt-[70px] md:pt-[80px] lg:pt-[90px] lg:w-[83px] xl:w-[86%] w-full">
          <Outlet />
          <Footer />
        </div>
      </div>

      <BottomNavMobile />
    </div>
  );
};

export default ProfileLayout;

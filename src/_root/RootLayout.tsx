import { Navigate, Outlet } from "react-router-dom";
import Bottombar from "../components/shared/Bottombar";
import LeftSidebar from "../components/shared/LeftSidebar";
import Topbar from "../components/shared/Topbar";
import { useUserContext } from "../context/AuthContext";

const RootLayout = () => {
  const { isAuthenticated } = useUserContext();

  console.log(isAuthenticated);
  return (
    <>
      {!isAuthenticated ? (
        <Navigate to="/sign-in" />
      ) : (
        <div className="w-full md:flex">
          <Topbar />
          <LeftSidebar />

          <section className="flex flex-1 h-full">
            <Outlet />
          </section>

          <Bottombar />
        </div>
      )}
    </>
  );
};

export default RootLayout;

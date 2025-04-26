import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
function RootLayout() {
  return (
    <div className="p-5 w-full overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;

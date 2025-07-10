import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ParticleSystem from "@/components/shared/particle-system";
function RootLayout() {
  return (
    <div className="p-5 w-full overflow-hidden">
      <ParticleSystem />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;

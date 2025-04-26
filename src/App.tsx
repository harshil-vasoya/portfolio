import RootLayout from "@/layouts/root";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home";
import ContactPage from "@/pages/contact";
import ProjectPage from "@/pages/projects";
import PageNotFound from "@/pages/PageNotFound";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
        {/* <Route path="/biodata" element={<Biodata />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense } from "react";
import { Loader, ScrollToTop, Navbar, Footer,  } from "./components";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Androidapp from "./pages/Androidapp"
const Home = React.lazy(() => import("./pages/Home"));
// const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/android" element={<Androidapp/>}/>

        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./Layout";

import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Work from "./pages/Work";
import Zpayd from "./pages/Zpayd";
import Experience from "./pages/Experience";

import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work">
          <Route index element={<Work />} />
          <Route path="scalable-architecture-for-zpayd" element={<Zpayd />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="bg-black/60">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
      </div> */}
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

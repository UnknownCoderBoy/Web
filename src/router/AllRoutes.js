import React from "react";
import HomeDark from "../views/HomeDark";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import FullBlog from "../components/blog/FullBlog";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="/blog/:id" element={<FullBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
